import "./SkillsContainer.css";
import {
  SiStyledcomponents,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiRedux,
  SiNodedotjs,
  SiJest,
  SiGit,
  SiJira,
  SiMaterialui,
} from "react-icons/si";

import { DiScrum } from "react-icons/di";

function SkillsContainer() {
  return (
    <div className="app__main__skills__wrapper">
      <SiHtml5 />
      <SiCss3 />
      <SiJavascript />
      <SiTypescript />
      <SiReact />
      <SiStyledcomponents />
      <SiRedux />
      <SiNodedotjs />
      <SiJest />
      <SiGit />
      <SiMaterialui />
      <SiJira />
      <DiScrum />
    </div>
  );
}

export default SkillsContainer;
