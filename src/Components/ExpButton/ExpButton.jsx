import React, { useState } from "react";
import ExpCard from "../ExpCard/ExpCard";
import SmallTitle from "../SmallTitle";

import "./ExpButton.css";

const ExpButton = ({ name, date, history }) => {
  const [isOpenCard, setIsOpenCard] = useState(false);

  return (
    <>
      <div className="button__wrapper" onClick={() => setIsOpenCard(true)}>
        <SmallTitle text={name} margin={false} className="button__title" />
      </div>
      {isOpenCard && (
        <div
          className="app__experience__card__background--blurred"
          onClick={() => setIsOpenCard(false)}
        >
          <ExpCard date={date} history={history} />
        </div>
      )}
    </>
  );
};

export default ExpButton;
