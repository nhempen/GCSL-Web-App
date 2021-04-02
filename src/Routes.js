import React from "react";
import './App.css'
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import NavBar from './components/NavBar';
import PrivateRoute from './PrivRoute';
import { AuthContext } from "./context/auth";
import About from 'components/About';

export default function Routes(props) {
    return (
        <AuthContext.Provider value={false}>
          <BrowserRouter>
            <NavBar />
            <Switch>
              <Route path="/about">
              <About />
              </Route>
              <PrivateRoute path="/profile" />
              <PrivateRoute path="/dashboard" />
            </Switch>
          </BrowserRouter>
        </AuthContext.Provider>
    );
  }