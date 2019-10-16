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
import getSportsWithCounters from 'selectors/getSportsWithCounters';

export const mapStateToProps = state => ({
  sports: getSportsWithCounters(state)
});

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchSports: fetchSports,
      fetchLeagues: fetchLeagues
    },
    dispatch
  );

export const fetchData = props => {
  const { fetchSports, categoryId, fetchLeagues } = props;
  fetchSports();
  categoryId && fetchLeagues(categoryId);
};

export const lifecycles = () => {
  return {
    timer: null,
    componentDidMount() {
      fetchData(this.props);
      this.timer = setInterval(() => fetchData(this.props), 30000);
    },
    componentWillUnmount() {
      clearInterval(this.timer);
      this.timer = null;
    }
  };
};

export const handlers = {
  sportItemClick: ({ setCategoryId, fetchLeagues }) => id => {
    setCategoryId(id);
    fetchLeagues(id);
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
