import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link className="navbar-link" to="/headlines">
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-link" to="/saved">
            Saved
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
