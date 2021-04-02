import React from "react";
import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './pages/About';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';


export default function Routes(props) {
    return (
          <BrowserRouter>
            <NavBar />
            <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
            <Route path='/blogs' component={Blogs} />
            <Route path='/sign-up' component={SignUp} />
            </Switch>
          </BrowserRouter>
    );
  }