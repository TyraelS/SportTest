import { compose, setDisplayName, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setTheme } from 'Reducers/themes';
import ThemesTab from './ThemesTab';

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setTheme: setTheme
    },
    dispatch
  );

export const handleSetTheme = {
  themesTabItemClick: ({ setTheme }) => event => {
    const theme = event.target.id;
    console.log(theme);
    localStorage.setItem('theme', theme);
    setTheme(theme);
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
