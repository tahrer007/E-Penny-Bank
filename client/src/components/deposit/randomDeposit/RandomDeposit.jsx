import React, { useState, useEffect } from "react";
import { MAX, MIN } from "services/api/const";

import "./randomDeposit.scss";

const RandomDeposit = ({ addAmount }) => {
  const [amount, setAmount] = useState(null);
  const [min, setMin] = useState(MIN);
  const [max, setMax] = useState(MAX);

  const randomPicker = (min, max) => {
    const randomNum = (Math.random() * (max - min) + min).toFixed(2);
    setAmount(randomNum);
    addAmount(randomNum);
  };
  return (
    <div className="randomBox">
      <div className="leftSide">
        <div className="slider">range slider</div>
        <div className="amount"> {amount}</div>
      </div>
      <div className="rightSide">
        <div className="random" onClick={() => randomPicker(min, max)}>
          random
        </div>
        <div className="reveal hidden">reveal </div>
      </div>
    </div>
  );
};

export default RandomDeposit;
