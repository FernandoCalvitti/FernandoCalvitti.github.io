import React from "react";
import Title from "../../Components/Title/Title";
import SubTitle from "../../Components/SubTitle/SubTitle";
import TextContainer from "../../Components/TextContainer";
import Paragraph from "../../Components/Paragraph/Paragraph";

import "./Welcome.css";

const Welcome = () => {
  return (
    <section className="app__main_section">
      <TextContainer
        title={"Hey! I am Fernando,"}
        subtitle={"Front End Developer"}
        smallTitle={"About Me"}
      />
      <Paragraph
        text={`With almost two years of experience on software development, I stand out as a team player with a strong focus on details.
            Enjoy creating friendly and efficient user interfaces
            Love my family, calisthenics and guitar!`}
      />
    </section>
  );
};

export default Welcome;
