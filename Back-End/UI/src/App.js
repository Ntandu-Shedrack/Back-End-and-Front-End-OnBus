import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar, { SidebarItem } from './Sidebar';
import { Home, Settings, Bell, Info, Truck, Mail } from 'lucide-react';
import HomePage from './pages/HomePage';
import SettingsPage from './pages/SettingsPage';
import NotificationsPage from './pages/NotificationsPage';
import AboutUsPage from './pages/AboutUsPage';
import ShipmentTrackingPage from './pages/ShipmentTrackingPage';
import ContactUsPage from './pages/ContactUsPage';
import './App.css';


function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar>
          <SidebarItem icon={<Home />} text="Home" to="/" />
          <SidebarItem icon={<Settings />} text="Settings" to="/pages/SettingsPage" />
          <SidebarItem icon={<Bell />} text="Notifications" to="/pages/NotificationsPage" alert />
          <SidebarItem icon={<Info />} text="About Us" to="/pages/AboutUsPage" />
          <SidebarItem icon={<Truck />} text="Shipment Tracking" to="/pages/ShipmentTrackingPage" />
          <SidebarItem icon={<Mail />} text="Contact Us" to="/pages/ContactUsPage" />
        </Sidebar>
        <main className="content">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/pages/SettingsPage">
              <SettingsPage />
            </Route>
            <Route path="/page/NotificationsPage">
              <NotificationsPage />
            </Route>
            <Route path="/pages/AboutUsPage">
              <AboutUsPage />
            </Route>
            <Route path="/pages/ShipmentTrackingPage">
              <ShipmentTrackingPage />
            </Route>
            <Route path="/pages/ContactUsPage">
              <ContactUsPage />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
