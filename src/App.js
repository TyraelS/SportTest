import React from 'react';
import { ThemeProvider } from 'styled-components';
import * as themes from 'themes';

import AppWrapper from './AppWrapper.style';
import SideMenu from 'components/SideMenu';
import LeagueTabs from 'components/LeagueTabs';
import ThemesTab from 'components/ThemesTab';

function App({ theme }) {
  return (
    <ThemeProvider theme={themes[theme]}>
      <AppWrapper>
        <SideMenu />
        <LeagueTabs />
        <ThemesTab />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
