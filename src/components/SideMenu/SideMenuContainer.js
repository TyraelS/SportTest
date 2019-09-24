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
import getSports from '../../selectors/getSports';
import generate from '../../utils/generateTimestamp';
import {
  setSportsTimestamp,
  setLeaguesTimestamp
} from '../../reducers/timestamps';

export const mapStateToProps = state => {
  console.log('Mapped state is: ', state);
  return {
    sports: getSports(state)
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
    console.log('Mounted');
    console.log(this);
    const fetchDataBind = fetchData.bind(this);
    fetchDataBind();
    setInterval(() => {
      fetchDataBind();
    }, 30000);
  }
};

export const mapContainerProps = props => {
  console.log('Props are: ', props);
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
    console.log('Target ID is:', event.target.id);
    setCurrentSportId(event.target.id);
    console.log('SportID is:', currentSportId);
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
