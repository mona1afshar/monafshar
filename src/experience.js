import './css/experience.css';
import React from "react";

import rooLogo from "./images/roo-logo.jpeg";
import pccLogo from "./images/pcc-logo.png";
import anooshLogo from "./images/anoosh-logo.jpg";
import predictaLogo from "./images/predicta-logo.png";
import nyacLogo from "./images/nyac-logo.jpeg";

const experiences = [
  {
    company: "Roo Veterinary Inc",
    role: "Software Engineer",
    location: "San Francisco, CA",
    date: "January - April 2026",
    logo: rooLogo,
    description:
      "Worked on the Relief to Hire product across React.js web and React Native mobile applications, building full-stack TypeScript features, improving recruiter onboarding and authentication, and bringing web workflows to mobile using Roo Code, an internal AI-assisted development platform powered by Claude.",
  },
  {
    company: "PointClickCare",
    role: "Software Engineer",
    location: "Mississauga, ON",
    date: "May - August 2025",
    logo: pccLogo,
    description:
      "Standardized CI/CD pipelines with Groovy/Jenkins across multiple teams, reducing maintenance by 30%. Worked on the business insights team to migrate legacy Power BI dashboards to a React.js web app, improving load performance by 45%.",
  },
  {
    company: "PointClickCare",
    role: "Software Developer & Database Administrator",
    location: "Mississauga, ON",
    date: "September - December 2024",
    logo: pccLogo,
    description:
      "Completed 20+ weekly SQL script requests and built a Power BI dashboard with Python automation. Automated DST maintenance reminders with JIRA integration for 2.5M patients.",
  },
  {
    company: "Anoosh Tech Inc",
    role: "Software Developer",
    location: "Toronto, ON",
    date: "January - April 2024",
    logo: anooshLogo,
    description:
      "Led IoT box extension development across 10 factory deployments. Implemented Python/MQTT data collection with cloud integration, reducing system crashes by 25%.",
  },
  {
    company: "Predicta4",
    role: "Back-End Developer",
    location: "Toronto, ON",
    date: "June - September 2023",
    logo: predictaLogo,
    description:
      "Automated hardware device setup with C++ and RESTful APIs, saving 5 minutes per user. Created 10+ unit tests and enhanced the Angular UI dashboard.",
  },
  {
    company: "North York Aquatic Club",
    role: "Competitive Swimming Coach",
    location: "Toronto, ON",
    date: "August 22 - September 23",
    logo: nyacLogo,
    description:
      "After being a competitive swimmer for 7 years I decided to coach pre-competitive athletes ages 6-10! Teaching them the 4 main strokes and ensuring they are ready to enter the competitive atmosphere.",
  },
];

const ExperienceCard = ({ exp }) => (
  <div className="exp-card">
    <div className="exp-card-header">
      <div className="exp-logo-wrap">
        <img src={exp.logo} alt={`${exp.company} logo`} className="exp-logo" />
      </div>
      <div className="exp-header-info">
        <h3 className="exp-company">{exp.company}</h3>
        <p className="exp-role">{exp.role}</p>
        <p className="exp-meta">{exp.location}</p>
        <p className="exp-meta">{exp.date}</p>
      </div>
    </div>
    <p className="exp-description">{exp.description}</p>
  </div>
);

const Experience = () => {
  return (
    <div className="experience-section" id="experience">
      <h2 className="section-title">WORK EXPERIENCE</h2>
      <div className="exp-scroll-container">
        {experiences.map((exp, i) => (
          <ExperienceCard exp={exp} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
