import React from "react";

import "./SmallTitle.css";

const SubTitle = ({ text, margin = true }) => {
  return (
    <h6
      className={
        margin
          ? "app__title--size-small--margin-bigger"
          : "app__title--size-small"
      }
    >
      {text}
    </h6>
  );
};

export default SubTitle;
