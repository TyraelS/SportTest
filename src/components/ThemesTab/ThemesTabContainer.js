import { compose, setDisplayName, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setTheme } from 'reducers/theme';
import ThemesTab from './ThemesTab';

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setTheme: setTheme
    },
    dispatch
  );

export const handleSetTheme = {
  themesTabItemClick: ({ setTheme }) => id => {
    setTheme(id);
  }
};

const enhance = compose(
  setDisplayName('ThemesTabContainer'),
  connect(
    null,
    mapDispatchToProps
  ),
  withHandlers(handleSetTheme)
);

export default enhance(ThemesTab);
