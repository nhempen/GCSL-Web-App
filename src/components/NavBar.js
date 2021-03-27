import React from 'react';
import { Link } from "react-router-dom";
import { useAuth } from '../context/auth';

export default function NavBar(props) {
  const isAuthenticated = useAuth();
  return(
    isAuthenticated ? (
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
    ) : (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    )
  );
}