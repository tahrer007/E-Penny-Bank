import React from "react";
import {
  faCheck,
  faTimes,
  
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Label = ({ htmlFor, validInput ,labelName,valid1 ,valid2 }) => {
  return (
    <label htmlFor={htmlFor}>
      {labelName}
      <FontAwesomeIcon
        icon={faCheck}
        className={valid1 ? "valid" : "hide"}
      />
      <FontAwesomeIcon
        icon={faTimes}
        className={valid2 ? "hide" : "invalid"}
      />
    </label>
  );
};

export default Label;
