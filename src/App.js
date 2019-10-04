import React from 'react';
import { ThemeProvider } from 'styled-components';
import * as themes from 'Themes';

import AppStyle from './AppStyle';
import SideMenu from 'Components/SideMenu';
import LeaguesTab from 'Components/LeaguesTab';
import ThemesTab from 'Components/ThemesTab';

function App({ theme }) {
  console.log(theme);
  return (
    <ThemeProvider theme={themes[theme]}>
      <AppStyle>
        <SideMenu />
        <LeaguesTab />
        <ThemesTab />
      </AppStyle>
    </ThemeProvider>
  );
}

export default App;
