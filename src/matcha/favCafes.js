import '../css/cafe.css';
import React from "react";
import GalleryDiv from '../components/galleryTimeline/GalleryDiv.tsx';
import { FaStar, FaRegStar, FaMapMarkerAlt } from "react-icons/fa";
import Layout from '../components/galleryTimeline/Layout.tsx';


import icha from "../images/matcha/icha.png";
import jenkins from "../images/matcha/jenkins.png";
import m2 from "../images/matcha/m2.png";
import midnightrun from "../images/matcha/midnightrun.png";
import OOO from "../images/matcha/OOO.png";
import qamaria from "../images/matcha/qamaria.png";
import zanmai from "../images/matcha/zanmai.png";
import zumi from "../images/matcha/zumi.png";
import hive from "../images/matcha/hive.png";
import lunar from "../images/matcha/lunar.png";
import demello from "../images/matcha/demello.png"; 
import neo from "../images/matcha/neo.jpeg"; 
import chabar from "../images/matcha/chabar.jpeg";

const cafes = [
  { name: "Icha Tea", location: "Toronto, ON", image: icha, rating: 5 },
  { name: "Jenkins", location: "London, UK", image: jenkins, rating: 5 },
  { name: "Matcha Matcha", location: "Toronto + Markham, ON", image: m2, rating: 4 },
  { name: "Midnight Run", location: "Waterloo, ON", image: midnightrun, rating: 1 },
  { name: "Out Of Office", location: "Markham, ON", image: OOO, rating: 4 },
  { name: "Qamaria", location: "San Jose, CA", image: qamaria, rating: 4 },
  { name: "Zanmai", location: "Montreal, QC", image: zanmai, rating: 4 },
  { name: "Zumi Café", location: "San Francisco, CA", image: zumi, rating: 5 },
  { name: "Hive", location: "Honomu, Hawaii", image: hive, rating: 3 }, 
  { name: "Coffee Lunar", location: "North York, ON", image: lunar, rating: 3 },
  { name: "De Mello Coffee", location: "Toronto, ON", image: demello, rating: 2 },
  { name: "Neo Coffee Bar", location: "Toronto, ON", image: neo, rating: 3 },
  { name: "M Chabar", location: "North York, ON", image: chabar, rating: 4 }
];

const getStars = (rating) => {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return (
    <>
      {[...Array(full)].map((_, i) => <FaStar key={`f-${i}`} color="#FFD700" />)}
      {half && <FaStar style={{ opacity: 0.5 }} color="#FFD700" />}
      {[...Array(empty)].map((_, i) => <FaRegStar key={`e-${i}`} color="#FFD700" />)}
    </>
  );
};

const Timeline = () => {
  return (
    <div className="timeline" id="timeline">
      <div className="timeline-section">
      <Layout />
        <h2 className="timeline-title">MATCHA CAFES I'VE TRIED</h2>
        <div className="image-wrapper">
          <section className="matcha-section gallery">
            <GalleryDiv>
              {cafes.map((cafe, i) => (
                <div className="timeline-image-card" key={i}>
                  <img src={cafe.image} alt={cafe.name} />
                  <div className="overlay">
                    <div className="top">
                      <h3>{cafe.name}</h3>
                    </div>
                    <div className="bottom">
                      <div className="stars">{getStars(cafe.rating)}</div>
                      <div className="location">
                        <FaMapMarkerAlt style={{ marginRight: "0.3rem" }} />
                        {cafe.location}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </GalleryDiv>
          </section>
        </div>
      </div>
    </div>
  );
};


export default Timeline;
