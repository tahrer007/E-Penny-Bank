import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { BOXES_TYPES, PRIVATE_BOX, SHARED_BOX } from "constants/const";
import SharedBoxDetails from "components/boxDetails/sharedBoxDetails/SharedBoxDetails";
import { useAddNewBoxMutation } from "features/boxes/boxesSlice";
import { useNavigate } from "react-router-dom";
import { selectCurrentUser } from "features/auth/authSlice";
import Label from "components/reusables/form/label/Label";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { selectedCurrentMode } from "features/them/themSlice";

import Header from "components/header/Header";
import "./createBox.scss";
const CreateBox = () => {
  const user = useSelector(selectCurrentUser);
  const navigate = useNavigate();
  const userRef = useRef();
  const errRef = useRef();
  const [addNewBox, { isLoading }] = useAddNewBoxMutation();
  const [boxName, setBoxName] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);
  const [boxType, setBoxType] = useState(PRIVATE_BOX);
  const [sharedBoxDetails, setSharedBoxDetails] = useState({});
  const darkMode = useSelector(selectedCurrentMode);
  const theme = darkMode ? "dark" : "light" ;

  useEffect(() => {
    setValidName(boxName ? true : false);
  }, [boxName]);

 
  const canSave = Boolean(boxName) && !isLoading;

  const onChangeSelection = (e) => {
    setBoxType(parseInt(e.target.value));
    if (!parseInt(e.target.value)) setSharedBoxDetails({});
  };

  const getSharedBoxDetails = ({ boxKey, isAllowedToReveal }) =>
    setSharedBoxDetails({ boxKey, isAllowedToReveal });

  const onCreateBoxClick = async () => {
    const { boxKey, isAllowedToReveal } = sharedBoxDetails;

    //TODO:CHECK WHY SHARED LIST NOT UPDATE THE BOXES LIST

    if (canSave) {
      try {
        await addNewBox({
          boxName,
          type: boxType,
          boxKey,
          isAllowedToReveal,
          userId: user._id,
        }).unwrap();

        setBoxName("");
        setSharedBoxDetails({});
        navigate("/welcome");
      } catch (err) {
        console.error("Failed to save the post", err);
      }
    }
  };

  return (
    <section className={`innerContainer createBoxSection ${theme}`}>
      <header>
        <Header from ={"newBox"}/>
        <div className="otherDetails">
          <div className="optionWrapper">
            <input
              className="radioBtn"
              type="radio"
              value={PRIVATE_BOX}
              name={PRIVATE_BOX}
              checked={boxType === PRIVATE_BOX}
              onChange={(e) => onChangeSelection(e)}
            />
            Private box
          </div>
          <div className="optionWrapper">
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
      </header>

      <main>
        <div className="boxNameBox">
          <Label
            htmlFor={"boxName"}
            valid1={validName}
            valid2={true}
            labelName={"Box name : "}
          />
          <input
            type="text"
            id="boxName"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setBoxName(e.target.value)}
            value={boxName}
            required
            onFocus={() => setUserFocus(true)}
            onBlur={() => setUserFocus(false)}
          />
        </div>
        {boxType ? (
          <SharedBoxDetails
            newBox={true}
            getSharedBoxDetails={getSharedBoxDetails}
            boxDetails={null}
          />
        ) : null}

        <div className="secBtnWrapper">
          <div
            className={`mainBtns columnFlex ${canSave ?"hoverable" :"disabled"} `}
            onClick={onCreateBoxClick}
          >
            <FontAwesomeIcon icon={faCloudArrowUp} />
            Save
          </div>
          <div className={`mainBtns columnFlex  ${isLoading ?"disabled" :"hoverable"} `} onClick={()=>navigate("/welcome")}>
            <FontAwesomeIcon icon={faTrashCan} />
            Cancel
          </div>
        </div>
      </main>
    </section>
  );
};

export default CreateBox;