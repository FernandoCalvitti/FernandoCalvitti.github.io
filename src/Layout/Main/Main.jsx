import React from "react";
import Welcome from "../../PageSections/Welcome/Welcome";
import Experience from "../../PageSections/Experience/Experience";
import Skills from "../../PageSections/Skills/Skills";
import Contact from "../../PageSections/Contact/Contact";

import "./Main.css";

const Main = () => {
  return (
    <main className="app__main">
      <Welcome />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
};

export default Main;
