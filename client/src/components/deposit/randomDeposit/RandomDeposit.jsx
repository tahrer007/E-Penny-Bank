import React, { useState, useEffect } from "react";
import { MAX, MIN } from "constants/const";
import Instructions from "components/reusables/form/instructions/Instructions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins, faEye } from "@fortawesome/free-solid-svg-icons";
import "./randomDeposit.scss";
import MultiRangeSlider from "components/reusables/multiRangeSlider/MultiRangeSlider";

const RandomDeposit = ({ getValue }) => {
  const [value, setValue] = useState(null);
  const [minVal, setMin] = useState(MIN);
  const [maxVal, setMax] = useState(MAX);

  const randomPicker = () => {
    const randomNum = Number(
      (Math.random() * (maxVal - minVal) + minVal).toFixed(2)
    );

    setValue(randomNum);
    getValue(randomNum);
  };

  const handleRangeChange = ({ min, max }) => {
    setMin(min);
    setMax(max);
  };
  useEffect(() => {
    console.log(minVal, maxVal);
  }, [minVal, maxVal]);
  const showAmount = () => console.log(value);
  return (
    <div className="randomWrapper">
      {<MultiRangeSlider min={MIN} max={MAX} onChange={handleRangeChange} />}

      <div className={`show ${ value ? "hoverable" : "disabled"}`} onClick={showAmount}>
        <FontAwesomeIcon icon={faEye} />
        Show Amount
      </div>

      <div className="random hoverable" onClick={randomPicker}>
        <FontAwesomeIcon icon={faCoins} /> Get random number
      </div>
    </div>
  );
};

export default RandomDeposit;
