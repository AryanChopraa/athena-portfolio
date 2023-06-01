import React, { useState } from 'react';
import './Navbar.css';


const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMobileMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <a href="#" className="nav-logo">
          WebDev.
        </a>
        <ul className={`nav-menu ${isActive ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Blog
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Contact us
            </a>
          </li>
        </ul>
        <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={toggleMobileMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
