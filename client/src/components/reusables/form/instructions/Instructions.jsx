import React, { useState, useEffect } from "react";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./instructions.scss";
const instructions = {
  username: ["Valid e-mail address."],
  password: [
    " 8 to 24 characters.",
    "Must include uppercase and lowercase letters, a number and a special character.",
    "Allowed special characters: @ ! #",
  ],
  confirmPwd: ["Must match the first password input field."],
};
const Instructions = ({ className, id }) => {
  const [textArr, SetTextArr] = useState(instructions[id] || null);

  const content = instructions[id].map((item) => <li key={item}>{item}</li>);

  return (
    <div id={id} className={className ? "instructions" : "offscreen"}>
       <FontAwesomeIcon icon={faInfoCircle} />
      <ul>{content}</ul>
    </div>
  );
};

export default Instructions;
