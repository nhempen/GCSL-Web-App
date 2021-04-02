import React from "react";
import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages';
import About from './pages/about';
import SignUp from './pages/signup';


export default function ORoutes(props) {
    return (
          <BrowserRouter>
            <NavBar />
            <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
            <Route path='/sign-up' component={SignUp} />
            </Switch>
          </BrowserRouter>
    );
  }