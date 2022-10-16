import React, { useState, useEffect } from "react";
import { MAX, MIN } from "services/const";
import Instructions from "components/reusables/form/instructions/Instructions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins, faEye } from "@fortawesome/free-solid-svg-icons";
import "./randomDeposit.scss";

const RandomDeposit = ({ getValue }) => {
  const [value, setValue] = useState(null);
  const [min, setMin] = useState(MIN);
  const [max, setMax] = useState(MAX);

  const randomPicker = () => {
    const randomNum = (Math.random() * (max - min) + min).toFixed(2);
    setValue(randomNum);
    getValue(randomNum);
  };
  const showAmount =()=> console.log(value) ; 
  return (
    <div className="randomWrapper">
      <div className="slider">slider</div>

      <div className="show" onClick={showAmount}>
        <FontAwesomeIcon icon={faEye} /> Show Amount
      </div>

      <div className="random" onClick={randomPicker}>
        <FontAwesomeIcon icon={faCoins} /> Get random number
      </div>
    </div>
  );
};

export default RandomDeposit;

