import './css/intro.css';
import { useTypingEffect } from './hooks/typing-effect';
import React from 'react';

import Navbar from './navbar.js';

function Intro() {
  const text = useTypingEffect("Nice to meet you, I'm Mona!", 100);
  return (
    <div className="Intro">
      <Navbar/>
      <div className="centered-content">
      <main>
        <h3>{text}</h3>
        <h2>Systems Design Engineering Student @UWaterloo</h2>
      </main>
      
            <a
              className="button"
              href="https://www.linkedin.com/in/mona1afshar/" target="_blank" rel="noreferrer">
              Connect with me
            </a>
            </div>
    </div>
  );
}

export default Intro;

