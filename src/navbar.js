// Navbar.js
import React, { useState } from 'react';
import './css/navbar.css';
import logo from './images/logo.png'; 
import Menu from './menu'; // assuming Menu.js is in the same directory


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
          <img src={logo} alt="Logo" />
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={menuOpen ? "hamburger open" : "hamburger"}></div>
        </div>
        <Menu isOpen={menuOpen} onClose={closeMenu} />
      </nav>
    );
  }
  
export default Navbar;