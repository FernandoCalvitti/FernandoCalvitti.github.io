import React from "react";

import "./Navbar.css";

const Navbar = () => {
  function navigateToSection(event, id) {
    event && event.preventDefault();
    const elementToView = document.getElementById(id);
    elementToView.scrollIntoView();
  }
  return (
    <nav className="app__navbar">
      <button
        onClick={(event) => {
          navigateToSection(event, "about_me");
        }}
      >
        About Me
      </button>
      <button
        onClick={(event) => {
          navigateToSection(event, "experience");
        }}
      >
        Experience
      </button>
      <button
        onClick={(event) => {
          navigateToSection(event, "skills");
        }}
      >
        Skills
      </button>
      <button
        onClick={(event) => {
          navigateToSection(event, "contact");
        }}
      >
        Contact
      </button>
    </nav>
  );
};

export default Navbar;
