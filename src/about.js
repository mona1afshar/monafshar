import './css/about.css';
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import mona from "./images/imMona.JPG";

const About = () => {
  const [clicked, setClicked] = useState(false);
  const [circlePos, setCirclePos] = useState({ x: 0, y: 0 });
  const matchaRef = useRef(null);
  const navigate = useNavigate();

  const handleMatchaClick = () => {
    const rect = matchaRef.current.getBoundingClientRect();
    setCirclePos({
      x: rect.left + rect.width / 2 + window.scrollX,
      y: rect.top + rect.height / 2 + window.scrollY,
    });
    setClicked(true);
    setTimeout(() => navigate("/matcha"), 800);  // navigate after animation
  };

  return (
    <div className="about" id="about">
      <div className="about-section">
        <div className="image-wrapper">
          <div className="img-mona">
            <img src={mona} alt="about" />
          </div>
        </div>
        <div className="about-content">
          <h2>Hello 👋</h2>
          <p>
            My name is Mona Afshar, and I'm a Systems Design Engineering
            student at the University of Waterloo 💻
            <br /><br />
            Through hackathons, previous work experience and personal
            projects like this one, I have collected valuable experience working in
            software development and product management.
            <br /><br />
            In my free time you can find me going for a swim, camping, dragon boating or making matcha :)
          </p>
          <button
            ref={matchaRef}
            className="matcha-button"
            onClick={handleMatchaClick}
          >
            Check out my matcha page!
          </button>
        </div>
      </div>
      {clicked && (
        <motion.div
          className="green-circle"
          initial={{ scale: 0 }}
          animate={{ scale: 50 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          style={{
            top: circlePos.y,
            left: circlePos.x,
            transform: "translate(-50%, -50%)",
          }}
        />
      )}
      <a href="#projects" className="scroll-down">↓</a>
    </div>
  );
};

export default About;
