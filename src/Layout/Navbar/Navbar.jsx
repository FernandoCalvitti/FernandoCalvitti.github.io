import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { motion } from "framer-motion";

import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  function navigateToSection(event, id) {
    event && event.preventDefault();
    const elementToView = document.getElementById(id);
    elementToView.scrollIntoView();
    setTimeout(() => {
      setToggleMenu(false);
    }, 0.2);
  }
  return (
    <nav className="app__navbar">
      <button
        className="app__navbar__button"
        onClick={(event) => {
          navigateToSection(event, "about_me");
        }}
      >
        About Me
      </button>
      <button
        className="app__navbar__button"
        onClick={(event) => {
          navigateToSection(event, "experience");
        }}
      >
        Experience
      </button>
      <button
        className="app__navbar__button"
        onClick={(event) => {
          navigateToSection(event, "skills");
        }}
      >
        Skills
      </button>
      <button
        className="app__navbar__button"
        onClick={(event) => {
          navigateToSection(event, "contact");
        }}
      >
        Contact
      </button>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          fontSize={27}
          className="overlay__open"
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="app__navbar-smallscreen_overlay"
          >
            <CgClose
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
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
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
