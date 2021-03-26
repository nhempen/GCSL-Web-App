import React from "react";
import './App.css'
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './components/About/About';
import Profile from './components/Profile/Profile';

function App() {
  return (
      <div className="wrapper">
        <h1>Application</h1>
        <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/profile">profile</Link>
            </li>
          </ul>
        </nav>
          <Switch>
            <Route path="/about">
              <Dashboard />
            </Route>
            <Route path="/profile">
              <Preferences />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;