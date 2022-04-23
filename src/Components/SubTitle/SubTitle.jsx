import React from "react";

import "./Subtitle.css";

const SubTitle = ({ text, margin = true }) => {
  return <h3 className="app__title--size-medium">{text}</h3>;
};

export default SubTitle;
