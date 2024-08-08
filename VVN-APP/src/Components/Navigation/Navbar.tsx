import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';

const Navbar: React.FC = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSignIn = () => {
    // Implement your sign-in logic here
    setIsSignedIn(true);
  };

  const handleSignOut = () => {
    // Implement your sign-out logic here
    setIsSignedIn(false);
  };

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
      <div className="navbar-sign-in">
        {isSignedIn ? (
          <button onClick={handleSignOut}>Sign Out</button>
        ) : (
          <button onClick={handleSignIn}>Sign In</button>
        )}
      </div>
    </nav>
  );
}


export default Navbar;