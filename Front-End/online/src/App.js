import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar, { SidebarItem } from './Sidebar';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import BackpackIcon from '@mui/icons-material/Backpack';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomePage from './pages/HomePage';
import SettingsPage from './pages/SettingsPage';
import NotificationsPage from './pages/NotificationsPage';
import AboutUsPage from './pages/AboutUsPage';
import ShipmentTrackingPage from './pages/ShipmentTrackingPage';
import ContactUsPage from './pages/ContactUsPage';
import BusesPage from './pages/BusesPage';
import './App.css';
import SeatLayout from './pages/SeatLayout';
import { BusProvider } from './contexts/BusContext';


function App() {
  return (
    <BusProvider>
    <Router>
      <div className="app">
        <Sidebar>
          <SidebarItem icon={<DashboardIcon />} text="Home Page" to="/" />
          {/* <SidebarItem icon={<Settings />} text="Settings" to="/settings" /> */}
          {/* <SidebarItem icon={<Bell />} text="Notifications" to="/notifications" alert /> */}
          <SidebarItem icon={<BackpackIcon />} text="Shipments" to="/shipments" />
          <SidebarItem icon={<ContactMailIcon />} text="Contact Us" to="/contact" />
          <SidebarItem icon={<InfoIcon />} text="About Us" to="/about" />
        </Sidebar>
        <main className="content">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/settings">
              <SettingsPage />
            </Route>
            <Route path="/notifications">
              <NotificationsPage />
            </Route>
            <Route path="/about">
              <AboutUsPage />
            </Route>
            <Route path="/shipments">
              <ShipmentTrackingPage />
            </Route>
            <Route path="/contact">
              <ContactUsPage />
            </Route>
            <Route path="/buses">
              <BusesPage />
            </Route>
            <Route path="/seat">
              <SeatLayout />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
    </BusProvider>
  );
}

export default App;
