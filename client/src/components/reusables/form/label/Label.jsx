import React from "react";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./label.scss";
const Label = ({ htmlFor, labelName, validInput, invalidInput }) => {
  return (
    <label htmlFor={htmlFor}>
      {labelName}
      <FontAwesomeIcon
        icon={faCheck}
        className={validInput ? "valid" : "hide"}
      />
      <FontAwesomeIcon
        icon={faTimes}
        className={invalidInput ? "invalid" :"hide" }
      />
    </label>
  );
};

export default Label;
