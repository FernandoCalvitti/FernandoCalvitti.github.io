import React from "react";
import Title from "../../Components/Title/Title";
import SubTitle from "../../Components/SubTitle/SubTitle";
import SmallTitle from "../../Components/SmallTitle/SmallTitle";

import "./TextContainer.css";

const TextContainer = ({ title, subtitle, smallTitle }) => {
  return (
    <article>
      <Title className="app__article__text__container__title" text={title} />
      <SubTitle
        className="app__article__text__container__subTitle"
        text={subtitle}
      />
      <SmallTitle
        className="app__article__text__container__smallTitle"
        text={smallTitle}
      />
    </article>
  );
};

export default TextContainer;
