import React, { useState, useEffect } from "react";
import { BOXES_TYPES, PRIVATE_BOX, SHARED_BOX } from "services/api/const";
//import RadioButton from "components/radioButton/RadioButton";

import "./createBox.scss";
//const PRIVATE_BOX = 0 ;
//const SHARED_BOX = 1 ;
const CreateBox = () => {
  const [boxType, setBoxType] = useState(PRIVATE_BOX);

  useEffect(() => {}, []);

  const onChangeSelection = (e) => {
    const value = parseInt(e.target.value);

    setBoxType(value);
  };

  return (
    <div className="pageContainer newBoxPage">
      <div className="boxDetails">
        <label>
          Box name:
          <input
            type="text"
            //value={this.state.value}
            //onChange={this.handleChange}
          />
        </label>
        <div className="optionsBox">
          <input
            className="radioBtn"
            type="radio"
            value={0}
            name="Random deposit"
            checked={boxType === PRIVATE_BOX}
            onChange={(e) => onChangeSelection(e)}
          />
          Private box
          <input
            className="radioBtn"
            type="radio"
            value={1}
            name="exact deposit"
            checked={boxType === SHARED_BOX}
            onChange={(e) => onChangeSelection(e)}
          />
          Shared box
        </div>
      </div>
      {boxType && <div className="sharedBoxDetails"> shared Box Details</div>}
      <div className="createBtn"> createBtn</div>
    </div>
  );
};

export default CreateBox;
