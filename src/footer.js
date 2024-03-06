import React from 'react';
import "./css/footer.css";
import Linkedin from "./images/linkedin.png"
import Github from "./images/github.png"
import Mail from "./images/mail.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://github.com/mona1afshar" target="_blank" rel="noopener noreferrer">
          <img src={Github} alt="GitHub Logo" className="footer-icon" />
        </a>
        <a href="mailto:mafshar@uwaterloo.ca" target="_blank" rel="noopener noreferrer">
          <img src={Mail} alt="Email Logo" className="footer-icon" />
        </a>
        <a href="https://www.linkedin.com/in/mona1afshar" target="_blank" rel="noopener noreferrer">
          <img src={Linkedin} alt="LinkedIn Logo" className="footer-icon" />
        </a>
        <p className="footer-text"> made with love 💙 mona</p>
      </div>
    </footer>
  );
}

export default Footer;
