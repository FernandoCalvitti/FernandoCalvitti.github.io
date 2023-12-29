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
        subtitle={"The Companies"}
        smallTitle={"Where I've Been Working & Stacks"}
      />
      <div className="app__main__experience__wrapper">
        <ExpButton
          name={ExperienceObject.fourth.name}
          history={ExperienceObject.fourth.stack}
          date={ExperienceObject.fourth.date}
        />
        <ExpButton
          name={ExperienceObject.third.name}
          history={ExperienceObject.third.stack}
          date={ExperienceObject.third.date}
        />
        <ExpButton
          name={ExperienceObject.second.name}
          history={ExperienceObject.second.stack}
          date={ExperienceObject.second.date}
        />
        <ExpButton
          name={ExperienceObject.first.name}
          history={ExperienceObject.first.stack}
          date={ExperienceObject.first.date}
        />
      </div>
    </section>
  );
};

export default Experience;
