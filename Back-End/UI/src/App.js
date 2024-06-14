import React from 'react';
import './App.css';
import LoginReg from './pages/loginReg';
import HomePage from './pages/homePage';
import BusManagement from './pages/busManagement';
import ShipmentsManagement from './pages/shipmentsManagement';
import Notification from './pages/Notification';
import ContactUs from './pages/contactUs';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" component={LoginReg} />
          <Route path="/homePage" component={HomePage} />
          <Route path="/busManagement" component={BusManagement} />
          <Route path="/shipmentsManagement" component={ShipmentsManagement} />
          <Route path="/notifications" component={Notification} />
          <Route path="/contactUs" component={ContactUs} />
          <Route path="/" exact component={LoginReg} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
