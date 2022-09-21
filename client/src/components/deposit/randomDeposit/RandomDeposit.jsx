import React, { useState, useEffect } from "react";
import { MAX,MIN } from "services/api/const";

import "./randomDeposit.scss";

const RandomDeposit = () => {
  const [amount, setAmount] = useState(null);
  const [min,setMin] = useState(MIN);
  const [max,setMax]=useState(MAX);

  const randomPicker = (min, max) => {
    console.log((Math.random() * (max - min) + min).toFixed(2));
  };
  return (
    <div className="randomBox">
      <div className="leftSide">
        <div className="slider"></div>
        <div className="amount"> amount</div>
      </div>
      <div className="rightSide">
        <div className="random" onClick={()=>randomPicker(min,max)}>random</div>
        <div className="reveal">reveal </div>
      </div>
    </div>
  );
};

export default RandomDeposit;
