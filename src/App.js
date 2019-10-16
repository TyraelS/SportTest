import React from 'react';
import { ThemeProvider } from 'styled-components';
import * as themes from 'themes';

import AppStyle from './App.style';
import SideMenu from 'components/SideMenu';
import LeagueTabs from 'components/LeagueTabs';
import ThemesTab from 'components/ThemesTab';

function App({ theme }) {
  return (
    <ThemeProvider theme={themes[theme]}>
      <AppStyle>
        <SideMenu />
        <LeagueTabs />
        <ThemesTab />
      </AppStyle>
    </ThemeProvider>
  );
}

export default App;
