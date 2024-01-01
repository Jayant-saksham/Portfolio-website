import React from 'react';
import './NavBar.css';

function Navbar() {
  return (
    <header className="header">
      <div className="brand">
        <h1>Website</h1>
      </div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
