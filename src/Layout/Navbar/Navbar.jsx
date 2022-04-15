import React from "react";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="app__navbar">
      <a href="#about_me">About Me</a>
      <a href="#experience">Experience</a>
      <a href="#skills">Skills</a>
      <a href="#contact">Contact</a>
    </nav>
  );
};

export default Navbar;
