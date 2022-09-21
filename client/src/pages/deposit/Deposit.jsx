import React, { useState, useEffect } from "react";
import "./deposit.scss";

const Deposit = () => {
  const [randomSelected, setRandomSlected] = useState(true);
  return (
    <div className="pageContainer depositPage">
      <div className="boxName">personal box</div>
      <div className="optionsBox">

        options
        {/*<div onChange={this.onChangeValue}>
        <input type="radio" value="Random " name="gender" /> Male
        <input type="radio" value="Female" name="gender" /> Female
  </div>*/}
      </div>
      <div className="selectedOption">selectedOption</div>
      <div className="submitBtn"> button</div>
    </div>
  );
};

export default Deposit;
