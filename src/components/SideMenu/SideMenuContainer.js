import {
  compose,
  lifecycle,
  setDisplayName,
  mapProps,
  withHandlers,
  withState
} from "recompose";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SideMenu from "./SideMenu";
import { fetchSports } from "../../actions/fetchSports";
import { changeSportEvents } from "../../actions/changeSportEvents";
import getSportEvents from "../../selectors/getSportEvents";

export const mapStateToProps = state => ({
  sports: getSportEvents(state)
});

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      dispatchFetchSports: fetchSports,
      dispatchChangeSportEvents: changeSportEvents
    },
    dispatch
  );

export const fetchOnMount = {
  componentDidMount() {
    //const { dispatchFetchSports } = this.props;
    console.log("Mounted");
    console.log(this);
    // console.log(dispatchFetchSports);
    // generate();
    const { dispatchFetchSports, currentSportId, fetchLeagues } = this.props;
    dispatchFetchSports();
    currentSportId && fetchLeagues(this.props.currentSportId);
    setInterval(() => {
      dispatchFetchSports();
      currentSportId && fetchLeagues(this.props.currentSportId);
      // console.log(this.props.id);
      // if(this.props.currentSportId){
      //   const events = getSportEvents(this.props.sports.sports, this.props.currentSportId);
      //   this.props.dispatchChangeSportEvents(events);
      // }
    }, 30000);
  }
};

export const mapContainerProps = props => {
  console.log(props);
  return {
    ...props,
    sports: props.sports.sports
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
  setDisplayName("SideMenuContainer"),
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withState("currentSportId", "setCurrentSportId", null),
  lifecycle(fetchOnMount),
  mapProps(mapContainerProps),
  withHandlers()
);

export default enhance(SideMenu);
