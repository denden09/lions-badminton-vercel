import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'; 
import logo from '../assets/lionslogo.png'; // Logo utama

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false); // State to toggle hamburger menu visibility

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <div>
      {/* Logo utama */}
      <a href="/" className="logo">
        <img src={logo} alt="UKM Badminton" />
      </a>

      {/* Navbar */}
      <nav className="navbar">
        <ul className={isMobile ? 'nav-links active' : 'nav-links'}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Gallery">Gallery</Link></li>
          <li><Link to="/Achievement">Achievement</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
          <li><Link to="/Schedule">Schedule</Link></li>
        </ul>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className={isMobile ? 'line line1 active' : 'line line1'}></div>
          <div className={isMobile ? 'line line2 active' : 'line line2'}></div>
          <div className={isMobile ? 'line line3 active' : 'line line3'}></div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
