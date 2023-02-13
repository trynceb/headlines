import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar-column">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link className="navbar-link" to="/headlines">Home</Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-link" to="/saved">Saved</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
