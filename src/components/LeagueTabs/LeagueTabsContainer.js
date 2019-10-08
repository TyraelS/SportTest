import { compose, setDisplayName } from 'recompose';
import { Map } from 'immutable';
import { connect } from 'react-redux';

import LeagueTabs from './LeagueTabs';

export const mapStateToProps = state => ({
  leagues: state.get('leagues', Map())
});

export default compose(
  setDisplayName('LeagueTabsContainer'),
  connect(mapStateToProps)
)(LeagueTabs);
