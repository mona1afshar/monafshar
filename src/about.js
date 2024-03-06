import './css/about.css';
import React from "react";
import mona from "./images/imMona.JPG";

  const About = () => {
    return (
      <div className="section" id="about">
        <div className="container">
          <div className="about-section">
          <div className="image-wrapper">
              <div className="img-mona"><img src={mona} alt="about"></img></div>
            </div>
            <div className="content">
                <h1> ABOUT ME </h1>
              <p>
                Hi! My name is Mona Afshar, and I'm a Systems Design Engineering
                student at the University of Waterloo 💻
                <br></br>
                <br></br>
                Through hackathons, previous work experience and personal
                projects like this one, I have collected valuable experience working in
                software development and product management.
                <br></br>
                <br></br>
                In my free time you can find me going for a swim or camping :){" "}
              </p>
            </div>
            
          </div>
        </div>
      </div>
    );
}
  
export default About;