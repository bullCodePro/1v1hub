import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="left">
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
      </div>
      <div className="right">
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Signup</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
