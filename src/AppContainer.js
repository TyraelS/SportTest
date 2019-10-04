import { compose, setDisplayName, pure } from 'recompose';
import { connect } from 'react-redux';
import App from './App';

export const mapStateToProps = state => ({
  theme: state.get('themes', '').toJS().theme
});

const enhance = compose(
  setDisplayName('AppContainer'),
  connect(
    mapStateToProps,
    null
  ),
  pure
);

export default enhance(App);
