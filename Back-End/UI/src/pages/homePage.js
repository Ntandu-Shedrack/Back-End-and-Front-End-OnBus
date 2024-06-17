// import React from 'react';
// import Sidebar, { SidebarItem } from './Sidebar';
// import { Home, Bell, BusFront, Truck, Mail } from 'lucide-react';


// function HomePage() {
//     return (
//         <div className="sidebar">
//         <Sidebar>
//           <SidebarItem icon={<Home />} text="Dashboard" to="/" />
//           <SidebarItem icon={<BusFront />} text="Bus Management" to="/pages/SettingsPage" />
//           <SidebarItem icon={<Bell />} text="Notifications" to="/pages/NotificationsPage" alert />
//           <SidebarItem icon={<Truck />} text="Shipments Management" to="/pages/ShipmentTrackingPage" />
//           <SidebarItem icon={<Mail />} text="Contact Us" to="/pages/ContactUs" />
//         </Sidebar>
//         <div className="homepage">
          
//         </div>
//         </div>
//     )
// }

// export default HomePage;


// src/pages/homePage.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BusManagement from './busManagement';
import ShipmentsManagement from './shipmentsManagement';
import Notification from './Notification';
import ContactUs from './contactUs';
import Sidebar, { SidebarItem } from './Sidebar';
import { Home, Settings, Bell, Truck, Mail } from 'lucide-react';
import './homePage.css';

const HomePage = () => {
  return (
    <Router>
      <div className="homePage">
        <Sidebar>
          <SidebarItem icon={<Home />} text="Dashboard" to="/homePage" />
          <SidebarItem icon={<Settings />} text="Bus Management" to="/busManagement" />
          <SidebarItem icon={<Bell />} text="Notifications" to="/notifications" alert />
          <SidebarItem icon={<Truck />} text="Shipments Management" to="/shipmentsManagement" />
          <SidebarItem icon={<Mail />} text="Contact Us" to="/contactUs" />
        </Sidebar>
        <main className="content">
          <Switch>
            <Route path="/homePage" exact>
              <div>
                <h1>Welcome to the Dashboard</h1>
                {/* <ChartComponent /> Display the charts here */}
              </div>
            </Route>
            <Route path="/busManagement" component={BusManagement} />
            <Route path="/notifications" component={Notification} />
            <Route path="/shipmentsManagement" component={ShipmentsManagement} />
            <Route path="/contactUs" component={ContactUs} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default HomePage;
