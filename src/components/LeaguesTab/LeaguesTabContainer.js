import { compose, setDisplayName } from 'recompose';
import { connect } from 'react-redux';
import LeaguesTab from './LeaguesTab';

export const mapStateToProps = state => ({
  leagues: state.leagues
});

export const enhance = compose(
  setDisplayName('LeaguesTabContainer'),
  connect(
    mapStateToProps,
    null
  )
);

export default enhance(LeaguesTab);
