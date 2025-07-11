import React from 'react';
import "../css/footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://github.com/mona1afshar" target="_blank" rel="noopener noreferrer">
          <FaGithub className="footer-icon" />
        </a>
        <a href="mailto:mafshar@uwaterloo.ca" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="footer-icon" />
        </a>
        <a href="https://www.linkedin.com/in/mona1afshar" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="footer-icon" />
        </a>
      </div>
      <p className="footer-text">made with love 💙 mona</p>
    </footer>
  );
};

export default Footer;
