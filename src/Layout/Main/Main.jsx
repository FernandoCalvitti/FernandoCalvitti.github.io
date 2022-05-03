import React, { useEffect } from "react";
import Welcome from "../../PageSections/Welcome/Welcome";
import Experience from "../../PageSections/Experience/Experience";
import Skills from "../../PageSections/Skills/Skills";
import Contact from "../../PageSections/Contact/Contact";

import "./Main.css";

const Main = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const options = {
      rootMargin: "0px",
      threshold: 0.25,
    };

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        const { target } = entry;
        if (entry.intersectionRatio >= 0.25) {
          target.classList.add("is-visible");
        } else {
          target.classList.remove("is-visible");
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    sections.forEach((section, index) => {
      observer.observe(section);
    });
  }, []);

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
