import './css/project.css';
import React from "react";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import privasee from "./images/privasee.png";
import sumobot from "./images/sumotbotVideo.mp4";
import wholeNewWorld from "./images/wholenewworld.png";
import trafficlights from "./images/trafficLights.mp4";
import vacfo from "./images/vacfo.png";
import caaamelbot from "./images/caaamelbot.png";
import mentalevolution from "./images/mentalevolution.png";
import harryPotter from "./images/harrypotter.png";
import mathwebsite from "./images/mathWebsite.png";
import kelp from "./images/KelptheOceansProject.png";
import watertracker from "./images/waterTrackers.PNG";

import ProjectCard from './projectCard.js';

const Project = () => {
    return (
        <div className="carousel-container">
            <h1 className="title">MY PROJECTS</h1>
            <div className="carousel">
                <AliceCarousel>
                    <ProjectCard
                        mediaSrc={privasee}
                        mediaType="image"
                        name="PrivaSee AI"
                        websiteLinkURL= "https://mona1afshar.github.io/PrivaSee-AI/"
                        description="A tool that scans the background of images and videos and points out potential private information leaks such as house numbers, phone screens and logos, ensuring safety for social media users."
                        link="Check out the Github" 
                        linkURL="https://drive.google.com/file/d/14PS5GFRjaDoWUk45FaA9XBBnVuydA135/view?usp=sharing"
                    />
                    <ProjectCard
                        mediaSrc={sumobot}
                        mediaType="video"
                        name="Sumobot"
                        description="I was challenged to make a sumobot that had to compete with other robots. The robot simply had to beat the opponent by pushing them out of the circle. It also had to be completely autonomous!"
                        link="Check out the Github" 
                        linkURL="https://github.com/mona1afshar/Sumobot"
                    />
                    <ProjectCard
                        mediaSrc={wholeNewWorld}
                        mediaType="image"
                        name="A Whole New World Game"
                        description="An interactive storyline game that will assist immigrant families in their challenges of moving to a new country. Our game takes players through 3 different levels/challenges, some of these include learning a whole new language for the first time and working hard to make money."
                        link="Check out the Github" 
                        linkURL="https://github.com/areuie/AWholeNewWorld"
                    />
                    <ProjectCard
                        mediaSrc={trafficlights}
                        mediaType="video"
                        name="Mini Traffic Light System"
                        description="My teammates and I were challenged to create a physical traffic light intersection. We coded the traffic lights on arduino in C++. We completed on the wiring on our own. We even made a 3D model of our design."
                        link="Check out the Github" 
                        linkURL="https://github.com/mona1afshar/MiniTrafficLights"
                    />
                    <ProjectCard
                        mediaSrc={vacfo}
                        mediaType="image"
                        name="VacFo"
                        websiteLinkURL= "https://mona1afshar.github.io/vacfo.github.io/index.html"
                        description="A website that would make finding a vaccine easy and accessable to all, especially the elderly in our community. The purpose of this website was to mimic a real life conversation by using the ADA chatbot function."
                        link="Check out the Github" 
                        linkURL="https://github.com/mona1afshar/vacfo.github.io"
                    />
                    <ProjectCard
                        mediaSrc={caaamelbot}
                        mediaType="image"
                        name="CAAAMel Bot"
                        description="An autonomous robot that can complete any course. The bot will follow black lines by correcting its path, turn 90 degrees at the detection of an obstacle, and drive straight forward without interruption."
                        link="Check out the Github" 
                        linkURL="https://github.com/mona1afshar/utraHacks"
                    />
                    <ProjectCard
                        mediaSrc={mentalevolution}
                        mediaType="image"
                        name="Mental Evolution Non-Profit Organization Website"
                        websiteLinkURL="https://mona1afshar.github.io/mentalevolutionorg.github.io/"
                        description="The official website of Mental Evolution, a non-profit organization aimed at breaking down stigmas around mental health."
                        link="Check out the Github" 
                        linkURL="https://github.com/mona1afshar/mentalevolutionorg.github.io"
                    />
                    <ProjectCard
                        mediaSrc={harryPotter}
                        mediaType="image"
                        name="Harry Potter Personality Quix"
                        description="Have you ever wondered which Hogwarts house you would be placed in if you were in Harry Potter? Well look no further that this Harry Potter Personality Quiz!"
                        link="Check out the Github" 
                        linkURL="https://github.com/mona1afshar/Harry-Potter-Personality-Quiz"
                    />
                    <ProjectCard
                        mediaSrc={mathwebsite}
                        mediaType="image"
                        name="Math Catching Website"
                        websiteLinkURL="https://mona1afshar.github.io/mathwebsite/"
                        description="Do you want a review of the ontario grade 11 functions curriculum? Here's an interactive math escape room challenge. Check it out!"
                        link="Check out the Github" 
                        linkURL="https://github.com/mona1afshar/mathwebsite"
                    />
                    <ProjectCard
                        mediaSrc={kelp}
                        mediaType="image"
                        name="Kelp the Oceans"
                        description=" This project consists of a device that plants Kelp simultaneously while a boat is travelling in the water. Kelp is an algae that aids in lowering the acidity in our oceans, which means planting it could help aid in restoring lost marine ecosystems."
                    />
                    <ProjectCard
                        mediaSrc={watertracker}
                        mediaType="image"
                        name="Water Trackers"
                        description="This website helps Canadians and Americans that live in commonly flooded regions to prepare for the possibility of a flood. The website has an interactive map that shows all the regions that are at risk of flooding and helps you prepare for it."
                    />
                </AliceCarousel>
            </div>
        </div>
    );
}

export default Project;
