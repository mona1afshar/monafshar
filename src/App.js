import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Intro from "./intro";
import About from "./about";
import Project from "./projects";
import Footer from "./components/footer.js";
import Matcha from './matcha/matcha.js';
import Recipes from './matcha/recipes.js';
import Cafe from './matcha/favCafes.js';
import ScrollToTop from "./ScrolltoTop.js";

const Home = () => (
    <Layout>
        <Intro />
        <div id="about">
            <About />
        </div>
        <div id="projects">
            <Project />
        </div>
        <Footer />
    </Layout>
);

const MatchaCorner = () => (
    <Layout>
        <Matcha />
        <div id="recipes">
            <Recipes />
        </div>
        <div id="cafe">
            <Cafe />
        </div>
        <Footer />
    </Layout>
);

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/matcha" element={<MatchaCorner />} />
            </Routes>
        </Router>
    );
}

export default App;
