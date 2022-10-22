import React, { useState, useEffect } from "react";
import { MAX, MIN } from "constants/const";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins, faEye ,faEyeSlash , faDollar} from "@fortawesome/free-solid-svg-icons";
import "./randomDeposit.scss";
import MultiRangeSlider from "components/reusables/multiRangeSlider/MultiRangeSlider";

const RandomDeposit = ({ getValue }) => {
  const [value, setValue] = useState(null);
  const [minVal, setMin] = useState(MIN);
  const [maxVal, setMax] = useState(MAX);
  const [showAmount, setShowAmount] = useState(false);

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

  return (
    <div className="randomWrapper">
      {<MultiRangeSlider min={MIN} max={MAX} onChange={handleRangeChange} />}

      <div className="twoBtnsContainer">
        <div
          className={`mainBtns ${value ? "hoverable" : "disabled"}`}
          onClick={() => setShowAmount(!showAmount)}
        >
          {!showAmount ? (
            <>
              <FontAwesomeIcon icon={faEye} /> Show
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faEyeSlash} /> Hide
            </>
          )}
        </div>

        <div className="mainBtns hoverable" onClick={randomPicker}>
          <FontAwesomeIcon icon={faCoins} /> Random
        </div>
      </div>
      {showAmount ? <div className="amount">{value}  {" "}
      
      <FontAwesomeIcon icon={faDollar} />
      </div> : null}
    </div>
  );
};

export default RandomDeposit;
