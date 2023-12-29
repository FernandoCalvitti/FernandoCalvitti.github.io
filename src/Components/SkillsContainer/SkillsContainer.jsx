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
  SiMui,
  SiNextdotjs,
  SiTailwindcss,
  SiDocker,
  SiSass,
  SiFigma,
  SiReacttable,
  SiReactquery,
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
      <SiMui />
      <SiJira />
      <DiScrum />
      <SiNextdotjs />
      <SiTailwindcss />
      <SiDocker />
      <SiSass />
      <SiFigma />
      <SiReacttable />
      <SiReactquery />
    </div>
  );
}

export default SkillsContainer;
