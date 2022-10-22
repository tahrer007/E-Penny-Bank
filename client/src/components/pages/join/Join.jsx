import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Label from "components/reusables/form/label/Label";
import Instructions from "components/reusables/form/instructions/Instructions";
import useUserInfo from "hooks/useUserInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useAddUserMutation } from "features/boxes/boxesSlice";

import Header from "components/header/Header";
import "./join.scss";

const JoinBox = () => {
  const { theme, user } = useUserInfo();
  const navigate = useNavigate();
  const userRef = useRef();
  const errRef = useRef();
  const [errMsg, setErrMsg] = useState("");

  const [boxKey, setBoxKey] = useState("");
  const [validBoxKey, setValidBoxKey] = useState(false);
  const [BoxKeyFocus, setBoxKeyFocus] = useState(false);
  const [addUser, { isLoading }] = useAddUserMutation();

  useEffect(() => {
    setValidBoxKey(boxKey.length === 5 ? true : false);
    setErrMsg("")
  }, [boxKey]);

  


  const canSave = validBoxKey && !isLoading;

  const handleSave = async () => {
    if (canSave) {
      try {
        const test = await addUser({ boxKey, userId: user._id }).unwrap();
        console.log(test);

        navigate("../BoxesList");
      } catch (err) {
        setErrMsg("Failed to particpate !! ");
      }
    }
  };

  return (
    <section className={`innerContainer createBoxSection ${theme}`}>
      <header>
        <Header from={"joinBox"} />
        <div className="otherDetails">test</div>
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
          />
          <Instructions
            className={BoxKeyFocus && boxKey && !validBoxKey}
            id="boxKey"
          />
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
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
