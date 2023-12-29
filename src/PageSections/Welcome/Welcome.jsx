import React from "react";
import TextContainer from "../../Components/TextContainer";
import Paragraph from "../../Components/Paragraph/Paragraph";

import "./Welcome.css";

const Welcome = () => {
  return (
    <section
      id="about_me"
      className="app__main__section app__main__section--welcome"
    >
      <TextContainer
        title={"Hey! I am Fernando,"}
        subtitle={"Software Developer"}
        smallTitle={"From Argentina ⭐⭐⭐"}
      />
      <Paragraph
        text={`
        +3 years providing solutions and contributing to my teams. Strongly focused on the frontend with TypeScript, React & NextJS.
        I stand out as a team player with a strong focus on details.
            Enjoy creating friendly and efficient user interfaces.
            Love my family, calisthenics and guitar!`}
        className="app__main__section--welcome--paragraph"
      />
    </section>
  );
};

export default Welcome;
