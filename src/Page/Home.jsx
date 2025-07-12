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
import Education from "./Education";
import Experience from "./Experience";

const Home = () => {
  return (
    <div className=" overflow-hidden">
      <div className="FirstPage text-main py-10 ">
        <Song />
        <Navbar />
        <HeroSection />
        <About />
        <Education />
      </div>
      <div className="SecondPage py-10 m-0 bg-dark text-pink">
        <Experience />
        <Skills />
      </div>

      <div className="ThirtPage py-10 m-0 bg-darkLight text-white">
        <Projects />
      </div>
      <div className="FourthPage">
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
