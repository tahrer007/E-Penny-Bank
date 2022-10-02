import React from "react";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Instructions = ({ className ,id}) => {
  return (
    <p
      id={id}
      className={className ? "instructions" : "offscreen"}
    >
      <FontAwesomeIcon icon={faInfoCircle} />
      4 to 24 characters.
      <br />
      Must begin with a letter.
      <br />
      Letters, numbers, underscores, hyphens allowed.
    </p>
  );
};

export default Instructions;
