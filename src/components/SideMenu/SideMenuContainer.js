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

export const mapStateToProps = state => {
  console.log('Mapped state is: ', state);
  return {
    // sports: getSportEvents(state)
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
  dispatchFetchSports();
  currentSportId && fetchLeagues(currentSportId);
};

export const fetchOnMount = {
  componentDidMount() {
    //const { dispatchFetchSports } = this.props;
    console.log('Mounted');
    console.log(this);
    // console.log(dispatchFetchSports);
    // generate();
    // const { dispatchFetchSports, currentSportId, fetchLeagues } = this.props;
    const fetchDataBind = fetchData.bind(this);
    // dispatchFetchSports();
    // currentSportId && fetchLeagues(currentSportId);
    fetchDataBind();
    setInterval(() => {
      fetchDataBind();
      // dispatchFetchSports();
      // currentSportId && fetchLeagues(currentSportId);
      // console.log(this.props.id);
      // if(this.props.currentSportId){
      //   const events = getSportEvents(this.props.sports.sports, this.props.currentSportId);
      //   this.props.dispatchChangeSportEvents(events);
      // }
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
    // const events = getSportEvents(props.sports, event.target.id);
    // props.dispatchChangeSportEvents(events);
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
