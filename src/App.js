import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import SideMenu from './components/SideMenu';
import LeaguesTab from './components/LeaguesTab';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <SideMenu />
        <LeaguesTab />
      </div>
    </Provider>
  );
}

export default App;
