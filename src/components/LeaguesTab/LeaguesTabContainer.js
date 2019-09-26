import { compose, setDisplayName, pure } from 'recompose';
import { connect } from 'react-redux';

import LeaguesTab from './LeaguesTab';

export const mapStateToProps = state => ({
  leagues: state.get('leagues')
});

export const enhance = compose(
  setDisplayName('LeaguesTabContainer'),
  connect(
    mapStateToProps,
    null
  ),
  pure
);

export default enhance(LeaguesTab);
