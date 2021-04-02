import React from "react";
import { BrowserRouter} from "react-router-dom"; 
import './App.css';
import Routes from './Routes';
import ORoutes from './ORoutes';
function App(props) {
  const test = false;
  return (
    test ? (
      <div className="wrapper">
        <h1>GCSL</h1>
        <BrowserRouter>
        <Routes />
        </BrowserRouter>
      </div>
    ) : (
      <div className="wrapper">
      <h1>GCSL</h1>
      <BrowserRouter>
      <ORoutes />
      </BrowserRouter>
      </div>
    )
  );
}

export default App;