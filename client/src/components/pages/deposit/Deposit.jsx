import React, { useState, useEffect } from "react";
import RandomDeposit from "components/deposit/randomDeposit/RandomDeposit";
import ExactDeposit from "components/deposit/exactDeposit/ExactDeposit";
import { useParams } from "react-router-dom";

import "./deposit.scss";
const Deposit = () => {
  const { boxId } = useParams();
  const [randomSelected, setRandomSlected] = useState(true);
  const onChangeSelection = (e) => setRandomSlected(!randomSelected);
  const [amount, setAmount] = useState(null);
  //TODO:remove from the first time amount
  const addAmount = async (amount) => setAmount(amount);
  useEffect(() => {
    console.log(amount);
  }, [amount]);

  return (
    <div className="pageContainer depositPage">
      <div className="boxName">box name</div>
      <div className="optionsBox" onChange={(e) => onChangeSelection(e)}>
        <input
          className="radioBtn"
          type="radio"
          value={true}
          name="Random deposit"
          defaultChecked={true}
        />
        Random deposit
        <input
          className="radioBtn"
          type="radio"
          value={false}
          name="exact deposit"
        />
        exact deposit
      </div>
      <div className="selectedOptionBox">
        {randomSelected ? (
          <RandomDeposit addAmount={addAmount} />
        ) : (
          <ExactDeposit addAmount={addAmount} />
        )}
      </div>
      <div className="submitBtn"> button</div>
    </div>
  );
};

export default Deposit;
