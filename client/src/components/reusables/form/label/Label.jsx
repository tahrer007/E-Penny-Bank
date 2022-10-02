import React from "react";
import {
  faCheck,
  faTimes,
  
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Label = ({ htmlFor, validInput }) => {
  return (
    <label htmlFor={htmlFor}>
      Username:
      <FontAwesomeIcon
        icon={faCheck}
        className={validInput ? "valid" : "hide"}
      />
      <FontAwesomeIcon
        icon={faTimes}
        className={validInput ? "hide" : "invalid"}
      />
    </label>
  );
};

export default Label;
