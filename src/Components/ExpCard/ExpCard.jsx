import React from "react";
import SmallTitle from "../SmallTitle";
import Paragraph from "../Paragraph";

const ExpCard = ({ name, history }) => {
  return (
    <div>
      <SmallTitle text={name} style={{ textTransform: "uppercase" }} />;
      <Paragraph text={history} />
    </div>
  );
};

export default ExpCard;
