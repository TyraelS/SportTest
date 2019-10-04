import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import * as themes from 'Themes';

import store from './store';
import AppStyle from './AppStyle';
import SideMenu from './components/SideMenu';
import LeaguesTab from './components/LeaguesTab';

function App() {
  console.log(themes);
  return (
    <Provider store={store}>
      <ThemeProvider theme={themes.light}>
        <AppStyle>
          <SideMenu />
          <LeaguesTab />
        </AppStyle>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
