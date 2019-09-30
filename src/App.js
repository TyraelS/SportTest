import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import AppStyle from './AppStyle';
import SideMenu from './components/SideMenu';
import LeaguesTab from './components/LeaguesTab';

function App() {
  return (
    <Provider store={store}>
      <AppStyle>
        <SideMenu />
        <LeaguesTab />
      </AppStyle>
    </Provider>
  );
}

export default App;
