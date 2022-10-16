import React, { useState, useEffect } from "react";
import Instructions from "components/reusables/form/instructions/Instructions";
import Label from "components/reusables/form/label/Label";
import "./exactDeposit.scss";
import { MAX, MIN } from "services/const";

const ExactDeposit = ({ getValue }) => {
  const [value, setValue] = useState(MIN);
  const [validValue, setValidValue] = useState(false);
  const [valueFocus, setValueFocus] = useState(false);

  useEffect(() => {
    const num = parseInt(value);


    if (num > MIN || num < MAX) {
      getValue(value);
      setValidValue(true);
    } else {
      setValidValue(false);
    }
  }, [value]);

  return (
    <div className="exactValueWrapper">
      <Label
        htmlFor={"exactAmount"}
        valid1={null}
        valid2={true}
        labelName={"Amount :"}
      />

      <input
        name="amount"
        type="number"
        pattern="^-?[0-9]\d*\.?\d*$"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        min={MIN}
        max={MAX}
        autoComplete="off"
        required
        aria-invalid={validValue ? "false" : "true"}
        onFocus={() => setValueFocus(true)}
        onBlur={() => setValueFocus(false)}
        id="value"
      />
      <Instructions
        id={"exactDeposit"}
        //TODO:instructions and values only number
        className={valueFocus && value && !validValue}
      />
    </div>
  );
};

export default ExactDeposit;
