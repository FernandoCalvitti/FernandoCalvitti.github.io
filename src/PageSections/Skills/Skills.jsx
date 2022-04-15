import React from "react";
import TextContainer from "../../Components/TextContainer";
import SkillsContainer from "../../Components/SkillsContainer/SkillsContainer";

const Skills = () => {
  return (
    <section id="skills" className="app__main__section">
      <TextContainer
        title={`Skills`}
        subtitle={`&`}
        smallTitle={"Software I Use To Work"}
      />
      <SkillsContainer />
    </section>
  );
};

export default Skills;
