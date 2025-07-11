import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link
import './css/menu.css';
import './css/navbar.css';

const Menu = ({ isOpen, onClose }) => {
  const handleLinkClick = () => {
    onClose(); // Close the menu when a link is clicked
  };

  return (
    <div>
      {isOpen && (
        <div className="menu-overlay" onClick={onClose}>
          <div className="menu-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={onClose}>
              <div className="hamburger-icon"></div>
            </button>
            <h1>MENU</h1>
            <hr />
            <ul className="menu-options">
              <li>
                <Link to="/" onClick={handleLinkClick}>Homepage</Link>
              </li>
              <li>
                <Link to="/matcha" onClick={handleLinkClick}>Mona's Matcha</Link>
              </li>
              <li>
                <a href="https://drive.google.com/file/d/1172RKK_YamwH7LAWfYTAd-pmhbMFoXiu/view?usp=sharing" target="_blank" rel="noreferrer">
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
