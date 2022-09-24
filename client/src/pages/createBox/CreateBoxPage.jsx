import React, { useState, useEffect } from "react";
import { BOXES_TYPES, PRIVATE_BOX, SHARED_BOX } from "services/const";
//import RadioButton from "components/radioButton/RadioButton";
import SharedBoxDetails from "components/sharedBoxDetails/SharedBoxDetails";
import "./createBox.scss";

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
      {boxType ? <SharedBoxDetails newBox={true} /> : null}
      <div className="createBtn"> createBtn</div>
    </div>
  );
};

export default CreateBox;
