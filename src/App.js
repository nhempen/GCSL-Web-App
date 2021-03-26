import React from "react";
import { BrowserRouter} from "react-router-dom"; 
import './App.css'
import Routes from './Routes'

function App(props) {
  return (
      <div className="wrapper">
        <h1>GCSL</h1>
        <BrowserRouter>
        <Routes />
        </BrowserRouter>
      </div>
  );
}

export default App;