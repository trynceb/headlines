import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="col-3">
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link active" to="/headlines">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/saved">
            Saved
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
