import {
  compose,
  lifecycle,
  setDisplayName,
  mapProps,
  withHandlers,
  withState,
  pure
} from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SideMenu from './SideMenu';
import { fetchSports } from '../../actions/fetchSports';
import { fetchLeagues } from '../../reducers/leagues';
import generate from '../../utils/generateTimestamp';
import {
  setSportsTimestamp,
  setLeaguesTimestamp
} from '../../reducers/responses';
import getSportsWithCounters from '../../selectors/getSports';

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
  const timestamp = generate();
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

export const mapContainerProps = props => {
  return {
    ...props,
    sports: props.sports
  };
};

export const handleShowEvents = {
  handleShowEvents: ({
    setCurrentSportId,
    fetchLeagues,
    setLeaguesTimestamp,
    currentSportId
  }) => event => {
    setCurrentSportId(event.target.id);
    const timestamp = generate();
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
  mapProps(mapContainerProps),
  withHandlers(handleShowEvents),
  pure
);

export default enhance(SideMenu);
