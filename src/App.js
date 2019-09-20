import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import SideMenu from './components/SideMenu';
import EventsTab from './components/EventsTab';


function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <SideMenu />
        <EventsTab />
      </div>
    </Provider>
  );
}

export default App;
