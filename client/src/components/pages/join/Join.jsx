import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Label from "components/reusables/form/label/Label";
import Instructions from "components/reusables/form/instructions/Instructions";
import useUserInfo from "hooks/useUserInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useAddUserMutation } from "features/boxes/boxesSlice";
import { capitalizeAll } from "utils/helper"; //welcome


import Header from "components/header/Header";
import "./join.scss";
import { capitalize } from "lodash";

const JoinBox = () => {
  const { theme, user } = useUserInfo();
  const navigate = useNavigate();
  const userRef = useRef();
  const errRef = useRef();
  const [msg, setMsg] = useState("");

  const [boxKey, setBoxKey] = useState("");
  const [validBoxKey, setValidBoxKey] = useState(false);
  const [BoxKeyFocus, setBoxKeyFocus] = useState(false);
  const [addUser, { isLoading }] = useAddUserMutation();

  useEffect(() => {
    setValidBoxKey(boxKey.length === 5 ? true : false);
    setMsg("")
  }, [boxKey]);

  


  const canSave = validBoxKey && !isLoading;

  const handleSave = async () => {
    if (canSave) {
      try {
        const box = await addUser({ boxKey, userId: user._id }).unwrap();
        if(!box)setMsg("Not valid key !") ;
        else {
          setMsg(`Success ! now you are a memeber in ${capitalizeAll(box.boxName)} box`)
        }
        console.log(box);

       // navigate("../BoxesList");
      } catch (err) {
        setMsg("Failed to particpate !! ");
      }
    }
  };

  return (
    <section className={`innerContainer createBoxSection ${theme}`}>
      <header>
        <Header from={"joinBox"} />
        <div className="otherDetails"></div>
      </header>

      <main>
        <div className="boxNameBox">
          <Label
            htmlFor={"BoxKey"}
            valid1={validBoxKey}
            valid2={!validBoxKey}
            labelName={"Box key : "}
          />
          <input
            type="text"
            id="boxName"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setBoxKey(e.target.value)}
            value={boxKey}
            required
            onFocus={() => setBoxKeyFocus(true)}
            onBlur={() => setBoxKeyFocus(false)}
            placeholder="Type box key to join"
          />
          <Instructions
            className={BoxKeyFocus && boxKey && !validBoxKey}
            id="boxKey"
          />
          <p
            ref={errRef}
            className={msg ? "msg" : "offscreen"}
            aria-live="assertive"
          >
            {msg}
          </p>
        </div>

        <div className="secBtnWrapper">
          <div
            className={`mainBtns columnFlex ${
              canSave ? "hoverable" : "disabled"
            } `}
            onClick={handleSave}
          >
            <FontAwesomeIcon icon={faCloudArrowUp} />
            Save
          </div>
          <div
            className={`mainBtns columnFlex  ${
              isLoading ? "disabled" : "hoverable"
            } `}
            onClick={() => navigate("/welcome")}
          >
            <FontAwesomeIcon icon={faTrashCan} />
            Cancel
          </div>
        </div>
      </main>
    </section>
  );
};

export default JoinBox;
