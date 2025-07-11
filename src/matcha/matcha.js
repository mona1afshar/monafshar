import React from "react";
import '../css/matcha.css';
import Navbar from '../components/navbar.js';
import MatchaVid from '../images/matchaVid.png';

function Matcha() {
  return (
    <div className="Matcha">
      <Navbar/>
      <div className="container">
      <main>
        <img src={MatchaVid} alt={"matcha video"} className="matcha-image" />
      </main>
      </div>
    </div>
  );
}

export default Matcha;

