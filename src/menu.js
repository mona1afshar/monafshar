import React from 'react';
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
                <a href="/" onClick={handleLinkClick} >Homepage</a> 
              </li>
              <li>
              <a href="/matcha" onClick={handleLinkClick} >Mona's Matcha</a> 
              </li>
              <li>
                <a href="https://drive.google.com/file/d/1172RKK_YamwH7LAWfYTAd-pmhbMFoXiu/view?usp=sharing" target="_blank" rel="noreferrer">Resume </a> {/* Link to the "resume" section */}
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
