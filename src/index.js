import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Layout from "./Layout";
import Intro from "./intro";
import About from "./about";
import Project from "./projects";
import Footer from "./footer";

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <Intro></Intro>
      <div id="about">
      <About></About>
      </div>
      <div id="projects">
      <Project></Project>
      </div>
      <Footer></Footer>
    </Layout>
  </React.StrictMode>,
  document.getElementById("root")
);
