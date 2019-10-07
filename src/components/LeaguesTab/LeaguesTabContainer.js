import { compose, setDisplayName } from 'recompose';
import { Map } from 'immutable';
import { connect } from 'react-redux';

import LeaguesTab from './LeaguesTab';

export const mapStateToProps = state => ({
  leagues: state.get('leagues', Map())
});

export const enhance = compose(
  setDisplayName('LeaguesTabContainer'),
  connect(
    mapStateToProps,
    null
  )
);

export default enhance(LeaguesTab);
