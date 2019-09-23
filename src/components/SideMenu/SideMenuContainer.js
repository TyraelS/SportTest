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
import { changeSportEvents } from '../../actions/changeSportEvents';
import { fetchLeagues } from '../../reducers/leagues';
import getSports from '../../selectors/getSports';
import generate from '../../utils/generateTimestamp';

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
      dispatchChangeSportEvents: changeSportEvents,
      fetchLeagues: fetchLeagues
    },
    dispatch
  );

export const fetchData = function() {
  const { dispatchFetchSports, currentSportId, fetchLeagues } = this.props;
  const timestamp = generate();
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
    currentSportId
  }) => event => {
    setCurrentSportId(event.target.id);
    fetchLeagues(currentSportId);
  }
};

export const enhance = compose(
  setDisplayName('SideMenuContainer'),
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withState('currentSportId', 'setCurrentSportId', null),
  withState('timestamp', 'setTimestamp', generate()),
  lifecycle(fetchOnMount),
  mapProps(mapContainerProps),
  withHandlers(handleShowEvents),
  pure
);

export default enhance(SideMenu);
