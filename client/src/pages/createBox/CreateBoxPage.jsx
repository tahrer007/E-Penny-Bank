import React, { useState, useEffect } from "react";
import { BOXES_TYPES, PRIVATE_BOX, SHARED_BOX } from "services/api/const";
import RadioButtons from "components/radioButtons/RadioButtons";
import "./createBox.scss";
//const PRIVATE_BOX = 0 ;
//const SHARED_BOX = 1 ;
const CreateBox = () => {
  const [boxtype, setBoxType] = useState(PRIVATE_BOX);
  useEffect(() => {
    console.log(BOXES_TYPES, PRIVATE_BOX, SHARED_BOX);
  }, []);

  const selectBoxType = (type) => {
    if (type === SHARED_BOX) setBoxType(SHARED_BOX);
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
          <RadioButtons
            options={BOXES_TYPES}
            selectBoxType onChangeSelection={selectBoxType}
          />
        </label>
      </div>
      {boxtype && <div className="sharedBoxDetails"> shared Box Details</div>}
      <div className="createBtn"> createBtn</div>
    </div>
  );
};

export default CreateBox;
