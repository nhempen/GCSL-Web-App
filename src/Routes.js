import React from "react";
import './App.css'
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from './components/NavBar';
import Profile from './components/Profile/Profile';
import About from './components/About/About';
import Dashboard from './components/Dashboard/Dashboard';
import PrivateRoute from './PrivRoute';
import { AuthContext } from "./context/auth";


export default function Routes(props) {
    return (
        <AuthContext.Provider value={false}>
          <BrowserRouter>
            <NavBar />
            <Switch>
              <Route path="/about" />
              <PrivateRoute path="/profile" />
              <PrivateRoute path="/dashboard" />
            </Switch>
          </BrowserRouter>
        </AuthContext.Provider>
    );
  }