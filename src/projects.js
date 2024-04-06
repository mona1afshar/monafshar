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
import styleshare from "./images/styleshare.png"
import raccoon from "./images/raccoon.png"
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
                        description="Using social media can be more dangerous than it seems, using this tool you can ensure you are not leaking any private information online. This AI scanner, scans photos and videos and highlights any potential information leaks such as addresses or phone numbers."
                        link="Check out the Github" 
                        linkURL="https://drive.google.com/file/d/14PS5GFRjaDoWUk45FaA9XBBnVuydA135/view?usp=sharing"
                    />
                    <ProjectCard
                        mediaSrc={sumobot}
                        mediaType="video"
                        name="Sumobot"
                        description="This autonomous bot is built to attack the opponent inside the ring and push them out. The ultrasonic distance sensors locate the opponent, while the colour sensors detect the ground to stay inside the ring."
                        link="Check out the Github" 
                        linkURL="https://github.com/mona1afshar/Sumobot"
                    />
                    <ProjectCard
                        mediaSrc={wholeNewWorld}
                        mediaType="image"
                        name="A Whole New World Game"
                        description="An interactive storyline game that will assist immigrant families in their challenges of moving to a new country. Our game takes players through 3 different challenges, including learning a whole new language for the first time and working hard to make money for food."
                        link="Check out the Github" 
                        linkURL="https://github.com/areuie/AWholeNewWorld"
                    />
                    <ProjectCard
                        mediaSrc={trafficlights}
                        mediaType="video"
                        name="Mini Traffic Light System"
                        description="This mini traffic light system mimics a real life intersection, with optimized traffic light intervals, a pedestrian light+button, an automatic gate that opens when the car approaches as well as an auto street light."
                        link="Check out the Github" 
                        linkURL="https://github.com/mona1afshar/MiniTrafficLights"
                    />
                    <ProjectCard
                        mediaSrc={vacfo}
                        mediaType="image"
                        name="VacFo"
                        websiteLinkURL= "https://mona1afshar.github.io/vacfo.github.io/index.html"
                        description="In the middle of the vaccine roll out, finding information on when and where to get vaccines was nearly impossible, especially for the elderly population. This website is built to mimic a real life conversation to help the elderly find a vaccine by chatting with the chatbot."
                        link="Check out the Github" 
                        linkURL="https://github.com/mona1afshar/vacfo.github.io"
                    />
                    <ProjectCard
                        mediaSrc={caaamelbot}
                        mediaType="image"
                        name="CAAAMel Bot"
                        description="An autonomous robot that can complete any course. The bot will follow black lines by correcting its path, turn 90 degrees at the detection of an obstacle, and drive straight forward without interruption. This was all built within 24 hours at a hackathon!"
                        link="Check out the Github" 
                        linkURL="https://github.com/mona1afshar/utraHacks"
                    />
                    <ProjectCard
                        mediaSrc={mentalevolution}
                        mediaType="image"
                        name="Mental Evolution Non-Profit Organization Website"
                        websiteLinkURL="https://mona1afshar.github.io/mentalevolutionorg.github.io/"
                        description="This is the official website of Mental Evolution, a non-profit organization aimed at breaking down stigmas around mental health. The website even features an embedded Instagram post tool!"
                        link="Check out the Github" 
                        linkURL="https://github.com/mona1afshar/mentalevolutionorg.github.io"
                    />
                    <ProjectCard
                        mediaSrc={harryPotter}
                        mediaType="image"
                        name="Harry Potter Personality Quiz"
                        description="Have you ever wondered which Hogwarts house you would be placed in if you were in Harry Potter? Well look no further that this Harry Potter Personality Quiz! With a bank of over 50 questions and custom made sorting algorithm it's very accurate."
                        link="Check out the Github" 
                        linkURL="https://github.com/mona1afshar/Harry-Potter-Personality-Quiz"
                    />
                    <ProjectCard
                        mediaSrc={styleshare}
                        mediaType="image"
                        name="StyleShare"
                        websiteLinkURL="https://www.figma.com/proto/8k9aJe3yJfRJY74cFymCpZ/UXL-wireframes?type=design&node-id=11-946&t=sy7tjYaJK6yiAm5n-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=11%3A946"
                        description="This tool allows fashion enthusiasts to make friends with similar senses of styles as them. Just like BeReal, this will capture an authenthic shot of your outfit of the days. You can also tag where each clothing item was purchased or find similar items using AI scanners."
                        link="Check out the Figma Prototype" 
                        linkURL="https://www.figma.com/proto/8k9aJe3yJfRJY74cFymCpZ/UXL-wireframes?type=design&node-id=11-946&t=sy7tjYaJK6yiAm5n-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=11%3A946"
                    />
                    <ProjectCard
                        mediaSrc={raccoon}
                        mediaType="image"
                        name="Canadian Trash Bandit"
                        description="This completely 3D printed model, assembles together like a puzzle! Once together you can press the pedal for the raccoon to hop out! The 3D model was built using Solidworks."
                        link="Do you want to see the assembly instructions?" 
                        linkURL="https://www.canva.com/design/DAF0wSuVxRM/yxz_Yi6_BKOFtEXjFr4zzg/view?utm_content=DAF0wSuVxRM&utm_campaign=designshare&utm_medium=link&utm_source=editor"
                    />
                    <ProjectCard
                        mediaSrc={mathwebsite}
                        mediaType="image"
                        name="Math Catching Website"
                        websiteLinkURL="https://mona1afshar.github.io/mathwebsite/"
                        description="Do you want a review of the Ontario grade 11 math functions curriculum? Here's an interactive math escape room challenge. For every question that you solve, there is a custom URL to the next page. Try it out!"
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
