// Navbar.js
import React, { useState } from 'react';
import './css/navbar.css';
import logo from './images/logo2.png'; 
import Menu from './menu'; // assuming Menu.js is in the same directory


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`hamburger ${menuOpen ? 'open' : ''}`}></div>
        </div>
      
      {/* Popup Menu */}
      <ul className="menu-options">
      <li>
                <a href="#about" >About Me</a> {/* Link to the "about" section */}
              </li>
              <li>
                <a href="#projects" >Projects</a> {/* Link to the "projects" section */}
              </li>
              <li>
                <a href="https://drive.google.com/file/d/1V0UZ1L5vDGMEdCtBj4XPvHhsAljUoR2a/view?usp=sharing" target="_blank" rel="noreferrer">Resume </a> {/* Link to the "resume" section */}
              </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;