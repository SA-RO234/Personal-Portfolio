import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/Hero";
import Song from "../components/Song";
import About from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

import { useEffect } from "react";

const Home = () => {
  return (
    <div className="pt-10 overflow-hidden">
      <Song />
      <Navbar />;
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
