import React from 'react';
import './App.css';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Sidebar, { SidebarItem } from './Sidebar';
// import { Home } from 'lucide-react';
// import HomePage from './pages/HomePage';
import RegLogin from './pages/RegLogin';


function App() {
  return (
    <div className="App">
      {/* <Router>
      <div className="app">
        <Sidebar>
          <SidebarItem icon={<Home />} text="Home Page" to="/pages/HomePage" />
          
        </Sidebar>
        <main className="content">
          <Switch>
            <Route exact path="/pages/RegLogin">
              <RegLogin/>
            </Route>
            <Route path="/pages/HomePage">
              <HomePage />
            </Route>
          </Switch>
        </main>
      </div>
    </Router> */}
    <RegLogin />
    </div>
  );
}

export default App;
