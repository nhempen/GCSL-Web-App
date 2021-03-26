import React from 'react';
import { Link } from "react-router-dom";
export default function NavBar(props) {
  return(
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
            <li>
              <Link to="/dashboard">dashboard</Link>
            </li>
          </ul>
        </nav>
  );
}