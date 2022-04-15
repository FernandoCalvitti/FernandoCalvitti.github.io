import React from "react";
import ExpButton from "../../Components/ExpButton/ExpButton";
import TextContainer from "../../Components/TextContainer";
import ExperienceObject from "../../Experience";
import "./Experience.css";

const Experience = () => {
  return (
    <section id="experience" className="app__main__section">
      <TextContainer
        title={`My experience...
        `}
        subtitle={"Where I worked?"}
        smallTitle={"Click them to know more"}
      />
      <div className="app__main__experience__wrapper">
        <ExpButton
          name={ExperienceObject.third.name}
          history={ExperienceObject.third.history}
          date={ExperienceObject.third.date}
        />
        <ExpButton
          name={ExperienceObject.second.name}
          history={ExperienceObject.second.history}
          date={ExperienceObject.second.date}
        />
        <ExpButton
          name={ExperienceObject.first.name}
          history={ExperienceObject.first.history}
          date={ExperienceObject.first.date}
        />
      </div>
    </section>
  );
};

export default Experience;
