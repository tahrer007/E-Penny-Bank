import React, { useState, useEffect } from "react";
import "./exactDeposit.scss";
const MIN = 1;
const MAX = 100;

const ExactDeposit = ({ addAmount }) => {
  const [amount, setAmount] = useState(MIN);
  const [alert, setAlert] = useState(false);

  const handleInputChange = (value) => {
    if (value < MIN || value > MAX) {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
        value > MAX ? setAmount(MAX) : setAmount(MIN);
      }, 3000);
    } else {
      addAmount(value);
      setAmount(value);
    }
  };

  return (
    <div className="exactBox">
      <h4>
        please add amount betweem {MIN} to {MAX} .
      </h4>
      <input
        name="amount"
        type="number"
        value={amount}
        onChange={(e) => handleInputChange(e.target.value)}
        min={MIN}
        max={MAX}
      />
      {alert && (
        <div className="alert">please select number between the range</div>
      )}
    </div>
  );
};

export default ExactDeposit;
