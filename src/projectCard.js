import React from 'react';
import "./css/projectCard.css";
import githubLogo from "./images/github.png"; 


const ProjectCard = ({ mediaSrc, mediaType, name, websiteLinkURL, description, link, linkURL }) => {
  return (
    <div className="project-card">
      {mediaType === 'image' ? (
        <img src={mediaSrc} alt={name} className="project-image" />
      ) : mediaType === 'video' ? (
        <div className="video-container">
          <video controls className="project-image">
            <source src={mediaSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <div>Unsupported media type</div>
      )}
      <a className="project-name" href={websiteLinkURL} target="_blank" rel="noreferrer">{name}</a>
      <p className="project-description">{description}</p>
      <a className="github-link" href={linkURL} target="_blank" rel="noreferrer">
        <img src={githubLogo} alt="GitHub Logo" className="github-logo" />
        {link}
      </a>
    </div>
  );
}

export default ProjectCard;
