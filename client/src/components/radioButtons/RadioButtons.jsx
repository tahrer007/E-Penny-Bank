import React, { useState, useEffect } from "react";
import "./radioButtons.scss";

const option = (option) => {};

const RadioButtons = ({ options, onChangeSelection }) => {
  const [selectedObtions, setSelectedOptions] = useState("");

  //const onChangeSelection = (e) => setSelectedOption();

  return (
    <div className="optionsBox" onChange={(e) => onChangeSelection(e)}>
      {options.map((option, index) => (
        <div key={option} className="radioOption">
          <input
            className="radioBtn"
            type="radio"
            value={index}
            name="Random deposit"
            defaultChecked={!index ? true : false}
          />
          {option} Box
        </div>
      ))}
    </div>
  );
};

export default RadioButtons;
