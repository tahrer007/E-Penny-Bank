import React, { useState, useEffect } from "react";
import { BOXES_TYPES, PRIVATE_BOX, SHARED_BOX } from "services/const";
//import RadioButton from "components/radioButton/RadioButton";
import SharedBoxDetails from "components/sharedBoxDetails/SharedBoxDetails";
import "./createBox.scss";

const CreateBox = () => {
  const [boxType, setBoxType] = useState(PRIVATE_BOX);
  const [boxName, setBoxName] = useState("");
  const [sharedBoxDetails, setSharedBoxDetails] = useState({});

  useEffect(() => {
    
  }, []);

  const onChangeSelection = (e) => {
    const value = parseInt(e.target.value);

    setBoxType(value);
  };

  const getSharedBoxDetails = ({ boxKey, isAllowedToReveal }) =>
    setSharedBoxDetails({ boxKey, isAllowedToReveal });

  const createNewBox = async () => {
    //boxName , userID ,box type ,isAllowedToReveal , isAdMIN : TRUE , key
    //amount 0 
    //create date 
    
  };

  return (
    <div className="pageContainer newBoxPage">
      <div className="boxDetails">
        <label>
          Box name:
          <input
            type="text"
            value={boxName}
            onChange={(e) => setBoxName(e.target.value)}
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
      {boxType ? (
        <SharedBoxDetails
          newBox={true}
          getSharedBoxDetails={getSharedBoxDetails}
        />
      ) : null}
      <div className="createBtn"> createBtn</div>
    </div>
  );
};

export default CreateBox;
