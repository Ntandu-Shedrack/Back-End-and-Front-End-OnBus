import React from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegLogin from './pages/RegLogin';
import Contact from './pages/Contact';
import About from './pages/about';
import Buses from './pages/Buses';
import Sidebar, { SidebarItem } from './Sidebar';
// import { Home, Info, Truck, Mail } from 'lucide-react';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import BackpackIcon from '@mui/icons-material/Backpack';
import DirectionsBusFilledOutlinedIcon from '@mui/icons-material/DirectionsBusFilledOutlined';
import DashboardIcon from '@mui/icons-material/Dashboard';
import './App.css';



const App = () => (
  <Router>
    <AppContent />
  </Router>
);

const AppContent = () => {
  const location = useLocation();
  const isRegLoginPage = location.pathname === '/';

  return (
    <div className="App">
      {!isRegLoginPage && (
        <Sidebar>
          <SidebarItem icon={<DashboardIcon />} text="Home Page" to="/home" />
          <SidebarItem icon={<DirectionsBusFilledOutlinedIcon />} text="Buses" to="/buses" />
          <SidebarItem icon={<BackpackIcon />} text="Packages" to="/shipments" />
          <SidebarItem icon={<ContactMailIcon />} text="Contact Us" to="/contact" />
          <SidebarItem icon={<InfoIcon />} text="About Us" to="/about" />
        </Sidebar>
      )}
      <main className="main-content">
        <Switch>
          <Route exact path="/" component={RegLogin} />
          <Route path="/home" component={HomePage} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About}/>
          <Route path="/buses" component={Buses}/>
        </Switch>
      </main>
    </div>
  );
};

export default App;
