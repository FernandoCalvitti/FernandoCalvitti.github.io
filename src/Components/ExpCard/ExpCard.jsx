import React from "react";
import SmallTitle from "../SmallTitle";
import Paragraph from "../Paragraph";

import "./ExpCard.css";

const ExpCard = ({ date, history }) => {
  return (
    <div className="app__experience__card__wrapper">
      <SmallTitle text={date} />
      <Paragraph text={history} />
    </div>
  );
};

export default ExpCard;
