import React, { useState, useEffect } from "react";
import "./deposit.scss";
import RandomDeposit from "components/deposit/randomDeposit/RandomDeposit";
import ExactDeposit from "components/deposit/exactDeposit/ExactDeposit";
const Deposit = () => {
  const [randomSelected, setRandomSlected] = useState(true);
  const onChangeSelection = (e) => setRandomSlected(!randomSelected);

  useEffect(() => {
    console.log(randomSelected);
  }, [randomSelected]);

  return (
    <div className="pageContainer depositPage">
      <div className="boxName">personal box</div>
      <div className="optionsBox" onChange={(e) => onChangeSelection(e)}>
        <input
          className="radioBtn"
          type="radio"
          value={true}
          name="gender"
          defaultChecked={true}
        />
        Random deposit
        <input className="radioBtn" type="radio" value={false} name="gender" />
        exact deposit
      </div>
      <div className="selectedOption">
        {randomSelected ? <RandomDeposit /> : <ExactDeposit />}
      </div>
      <div className="submitBtn"> button</div>
    </div>
  );
};

export default Deposit;
