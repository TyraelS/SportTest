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
import { fetchSports } from 'reducers/sports';
import { fetchLeagues } from 'reducers/leagues';
import { setSportsTimestamp, setLeaguesTimestamp } from 'reducers/responses';
import { generateTimestamp } from 'utils';
import getSportsWithCounters from 'selectors/getSportsWithCounters';

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
    categoryId,
    fetchLeagues,
    setSportsTimestamp,
    setLeaguesTimestamp
  } = props;
  const timestamp = generateTimestamp();
  setSportsTimestamp(timestamp);
  setLeaguesTimestamp(timestamp);
  fetchSports(timestamp);
  categoryId && fetchLeagues(categoryId, timestamp);
};

export const lifecycles = () => {
  return {
    timer: null,
    componentDidMount() {
      fetchData(this.props);
      this.timer = setInterval(() => fetchData(this.props), 10000);
    },
    componentWillUnmount() {
      clearInterval(this.timer);
      this.timer = null;
    }
  };
};

export const handlers = {
  sportItemClick: ({
    setCategoryId,
    fetchLeagues,
    setLeaguesTimestamp
  }) => id => {
    const timestamp = generateTimestamp();
    setCategoryId(id);
    setLeaguesTimestamp(timestamp);
    fetchLeagues(id, timestamp);
  }
};

export default compose(
  setDisplayName('SideMenuContainer'),
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withState('categoryId', 'setCategoryId', null),
  lifecycle(lifecycles()),
  withHandlers(handlers),
  pure
)(SideMenu);
