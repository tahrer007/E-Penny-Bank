import React, { useState, useEffect } from "react";
import { BOXES_TYPES, PRIVATE_BOX, SHARED_BOX } from "services/const";
import InputField from "components/reusables/InputField/InputField";
//import RadioButton from "components/radioButton/RadioButton";
import SharedBoxDetails from "components/reusables/sharedBoxDetails/SharedBoxDetails";
import "./createBox.scss";

const CreateBox = () => {
  const [boxType, setBoxType] = useState(PRIVATE_BOX);
  const [boxName, setBoxName] = useState("");
  const [sharedBoxDetails, setSharedBoxDetails] = useState({});

  const onChangeText = (e) => setBoxName(e.target.value);
  const onChangeSelection = (e) => {
    setBoxType(parseInt(e.target.value));
    if (!parseInt(e.target.value)) setSharedBoxDetails({});
  };

  const getSharedBoxDetails = ({ boxKey, isAllowedToReveal }) =>
    setSharedBoxDetails({ boxKey, isAllowedToReveal });

  const onCreateBoxClick = async () => {
    //boxName , userID ,box type ,isAllowedToReveal , isAdMIN : TRUE , key
    //amount 0
    //create date
  };

  return (
    <div className="pageContainer newBoxPage">
      <div className="boxDetails">
        <InputField
          placeholder={"enter box name"}
          value={boxName}
          onChangeText={onChangeText}
          editable={true}
          type={"test"}
          label={"Box name"}
        />
        <div className="optionsBox">
          <input
            className="radioBtn"
            type="radio"
            value={PRIVATE_BOX}
            name={PRIVATE_BOX}
            checked={boxType === PRIVATE_BOX}
            onChange={(e) => onChangeSelection(e)}
          />
          Private box
          <input
            className="radioBtn"
            type="radio"
            value={SHARED_BOX}
            name={SHARED_BOX}
            checked={boxType === SHARED_BOX}
            onChange={(e) => onChangeSelection(e)}
          />
          Shared box
        </div>
      </div>
      {boxType ? (
        <SharedBoxDetails
          newBox={true}
          getSharedBoxDetails={getSharedBoxDetails}
        />
      ) : null}
      <div className="createBtn">
        <button type="button" disabled={!boxName} onclick={onCreateBoxClick}>
          Create Box
        </button>
      </div>
    </div>
  );
};

export default CreateBox;
