import { compose, setDisplayName, pure } from 'recompose';
import { connect } from 'react-redux';
import App from './App';

export const mapStateToProps = state => ({
  theme: state.get('theme', '')
});

const enhance = compose(
  setDisplayName('AppContainer'),
  connect(mapStateToProps),
  pure
);

export default enhance(App);
