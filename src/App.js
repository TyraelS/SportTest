import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import AppStyle from './AppStyle';
import SideMenu from 'components/SideMenu';
import LeagueTabs from 'components/LeagueTabs';

function App() {
  return (
    <Provider store={store}>
      <AppStyle>
        <SideMenu />
        <LeagueTabs />
      </AppStyle>
    </Provider>
  );
}

export default App;
