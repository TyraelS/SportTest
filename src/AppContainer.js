import { compose, setDisplayName, pure } from 'recompose';
import { connect } from 'react-redux';
import App from './App';

export const mapStateToProps = state => ({
  theme: state.get('theme', '')
});

export default compose(
  setDisplayName('AppContainer'),
  connect(mapStateToProps),
  pure
)(App);
