import React from "react";
import HeroSection from "./components/Hero_Section/HeroSection";
import About_me from "./components/About_me/About_me";
import Skills from "./components/skill/Skills";
import Project_section from "./components/projects/Project_section";

const page = () => {
  return (
    <>
      <title>My Portfolio</title>
      <HeroSection />
      <About_me />
      <Skills />
      <Project_section />
    </>
  );
};

export default page;
