import {
  compose,
  lifecycle,
  setDisplayName,
  withHandlers,
  withState,
  pure
} from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SideMenu from './SideMenu';
import { fetchSports } from 'Reducers/sports';
import { fetchLeagues } from 'Reducers/leagues';
import { setSportsTimestamp, setLeaguesTimestamp } from 'Reducers/responses';
import { generateTimestamp } from 'Utils';
import getSportsWithCounters from 'Selectors/getSportsWithCounters';

export const mapStateToProps = state => ({
  sports: getSportsWithCounters(state)
});

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchSports: fetchSports,
      fetchLeagues: fetchLeagues,
      setSportsTimestamp: setSportsTimestamp,
      setLeaguesTimestamp: setLeaguesTimestamp
    },
    dispatch
  );

export const fetchData = props => {
  const {
    fetchSports,
    currentSportId,
    fetchLeagues,
    setSportsTimestamp,
    setLeaguesTimestamp
  } = props;
  const timestamp = generateTimestamp();
  setSportsTimestamp(timestamp);
  setLeaguesTimestamp(timestamp);
  fetchSports(timestamp);
  currentSportId && fetchLeagues(currentSportId, timestamp);
};

export const fetchOnMount = {
  componentDidMount() {
    fetchData(this.props);
    setInterval(() => {
      fetchData(this.props);
    }, 10000);
  }
};

export const handleShowEvents = {
  sportItemClick: ({
    setCurrentSportId,
    fetchLeagues,
    setLeaguesTimestamp
  }) => event => {
    setCurrentSportId(event.target.id);
    const timestamp = generateTimestamp();
    setLeaguesTimestamp(timestamp);
    fetchLeagues(event.target.id, timestamp);
  }
};

export const enhance = compose(
  setDisplayName('SideMenuContainer'),
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withState('currentSportId', 'setCurrentSportId', null),
  lifecycle(fetchOnMount),
  withHandlers(handleShowEvents),
  pure
);

export default enhance(SideMenu);
