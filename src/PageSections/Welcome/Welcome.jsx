import React from "react";
import TextContainer from "../../Components/TextContainer";
import Paragraph from "../../Components/Paragraph/Paragraph";

import "./Welcome.css";

const Welcome = () => {
  return (
    <section className="app__main__section app__main__section--welcome">
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
