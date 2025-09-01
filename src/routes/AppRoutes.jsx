import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "@/Page/Home";
import About from "@/Page/AboutMe";
import Skills from "@/Page/Skills";
import Projects from "@/Page/Projects";
import Contact from "@/Page/Contact";
import Education from "@/Page/Education";
import Experience from "@/Page/Experience";
import Testimonials from "@/Page/Testimonials";
import ProjectDetail from "@/components/projects/ProjectDetail";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/education" element={<Education />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/projectdetail/:id" element={<ProjectDetail/>} />
    </Routes>
  );
};

export default AppRoutes;