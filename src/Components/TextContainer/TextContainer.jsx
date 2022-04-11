import React from "react";
import Title from "../../Components/Title/Title";
import SubTitle from "../../Components/SubTitle/SubTitle";
import SmallTitle from "../../Components/SmallTitle/SmallTitle";

import "./TextContainer.css";

const TextContainer = ({ title, subtitle, smallTitle }) => {
  return (
    <article>
      <Title text={title} />
      <SubTitle text={subtitle} />
      <SmallTitle text={smallTitle} />
    </article>
  );
};

export default TextContainer;
