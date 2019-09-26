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
import { fetchSports } from '../../reducers/sports';
import { fetchLeagues } from '../../reducers/leagues';
import { generateTimestamp } from '../../utils';
import {
  setSportsTimestamp,
  setLeaguesTimestamp
} from '../../reducers/responses';
import getSportsWithCounters from '../../selectors/getSportsWithCounters';

export const mapStateToProps = state => {
  return {
    sports: getSportsWithCounters(state)
  };
};

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      dispatchFetchSports: fetchSports,
      fetchLeagues: fetchLeagues,
      setSportsTimestamp: setSportsTimestamp,
      setLeaguesTimestamp: setLeaguesTimestamp
    },
    dispatch
  );

export const fetchData = function() {
  const {
    dispatchFetchSports,
    currentSportId,
    fetchLeagues,
    setSportsTimestamp,
    setLeaguesTimestamp
  } = this.props;
  const timestamp = generateTimestamp();
  setSportsTimestamp(timestamp);
  setLeaguesTimestamp(timestamp);
  dispatchFetchSports(timestamp);
  currentSportId && fetchLeagues(currentSportId, timestamp);
};

export const fetchOnMount = {
  componentDidMount() {
    const fetchDataBind = fetchData.bind(this);
    fetchDataBind();
    setInterval(() => {
      fetchDataBind();
    }, 30000);
  }
};

export const handleShowEvents = {
  handleShowEvents: ({
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
