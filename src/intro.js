import './css/intro.css';
import { useTypingEffect } from './hooks/typing-effect';
import React from 'react';

import Navbar from './components/navbar.js';

function Intro() {
  const text = useTypingEffect("Nice to meet you, I'm Mona!", 100);
  return (
    <div className="Intro">
      <Navbar/>
      <div className="container">
      <main>
        <h1>{text}</h1>
        <h3>Systems Design Engineering Student @UWaterloo</h3>
      </main>
      </div>
            <a
              className="intro-button"
              href="https://www.linkedin.com/in/mona1afshar/" target="_blank" rel="noreferrer">
              Connect with me
            </a>

            <a href="#about" className="scroll-down">
  ↓
</a>

    </div>
  );
}

export default Intro;

