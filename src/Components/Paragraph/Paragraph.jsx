import React from "react";

import "./Paragraph.css";

const Paragraph = ({ text, margin = true }) => {
  return (
    <p className={margin ? "app__paragraph--margin-bigger" : "app__paragraph"}>
      {text}
    </p>
  );
};

export default Paragraph;
