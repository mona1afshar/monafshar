// Navbar.js
import React, { useState } from 'react';
import '../css/navbar.css';
import logo from '../images/logoFR.svg'; 
import Menu from '../menu'; // assuming Menu.js is in the same directory


function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  
    const closeMenu = () => {
      setMenuOpen(false);
    };
  
    return (
      <nav className="navbar">
        <div className="logo">
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={menuOpen ? "hamburger open" : "hamburger"}></div>
        </div>
        <Menu isOpen={menuOpen} onClose={closeMenu} />
      </nav>
    );
  }
  
export default Navbar;