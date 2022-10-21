import React, { useState, useEffect } from "react";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { INSTRACTIONS } from "constants/const";
import "./instructions.scss";

const Instructions = ({ className, id }) => {
  const content = INSTRACTIONS[id].map((item) => <li key={item}>{item}</li>);

  return (
    <div id={id} className={className ? "instructions" : "offscreen"}>
      <FontAwesomeIcon icon={faInfoCircle} />
      <ul>{content}</ul>
    </div>
  );
};

export default Instructions;
