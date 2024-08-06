import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';
const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/resume">Resume</Link>
        </li>
        <li className="navbar-item">
          <Link to="/forum">Forum</Link>
        </li>
        <li className="navbar-item">
          <Link to="/services">Services</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;