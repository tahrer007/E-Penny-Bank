import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewBox } from "features/boxes/boxesSlice";
import { BOXES_TYPES, PRIVATE_BOX, SHARED_BOX } from "services/const";
import InputField from "components/reusables/InputField/InputField";
//import RadioButton from "components/radioButton/RadioButton";
import SharedBoxDetails from "components/reusables/sharedBoxDetails/SharedBoxDetails";
import "./createBox.scss";

const usersId = "6331f73f92d30d25c7103d29";

const CreateBox = () => {
  const [boxType, setBoxType] = useState(PRIVATE_BOX);
  const [boxName, setBoxName] = useState("");
  const [sharedBoxDetails, setSharedBoxDetails] = useState({});
  const [addRequestStatus, setAddRequestStatus] = useState("idle");
  const dispatch = useDispatch();
  const canSave = Boolean(boxName) && addRequestStatus === "idle";

  const onChangeText = (e) => setBoxName(e.target.value);
  const onChangeSelection = (e) => {
    setBoxType(parseInt(e.target.value));
    if (!parseInt(e.target.value)) setSharedBoxDetails({});
  };

  const getSharedBoxDetails = ({ boxKey, isAllowedToReveal }) =>
    setSharedBoxDetails({ boxKey, isAllowedToReveal });

  const onCreateBoxClick = async () => {
    const { boxKey, isAllowedToReveal } = sharedBoxDetails;
    if (canSave) {
      try {
        setAddRequestStatus("pending");
        dispatch(
          addNewBox({ boxName, boxType, boxKey, isAllowedToReveal, usersId })).unwrap();
      } catch (err) {
        console.error("Failed to create box the box", err);
      } finally {
        setAddRequestStatus("idle");
      }
    }

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
        <button type="button" disabled={!canSave} onClick={onCreateBoxClick}>
          Create Box
        </button>
      </div>
    </div>
  );
};

export default CreateBox;
