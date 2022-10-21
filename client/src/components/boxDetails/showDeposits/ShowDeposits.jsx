import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faDollar } from "@fortawesome/free-solid-svg-icons";
import "./showDeposits.scss";

function ShowDeposits({ deposits, hideWindow }) {
  const [show, setShow] = useState(false);

  return show ? (
    <div className="window columnFlex">
      <div className="innerWindow">
        <h2>
          {deposits} {" "} <FontAwesomeIcon icon={faDollar} /> 
       
        </h2>

        <div className="singleBtnContainer">
          <div className="mainBtns columnFlex hoverable" onClick={hideWindow}>
            Done
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="window columnFlex">
      <div className="innerWindow">
        <h2>Are You Sure ?</h2>

        <div className="twoBtnsContainer">
          <div
            className="mainBtns columnFlex hoverable"
            onClick={() => setShow(true)}
          >
            Yes
          </div>
          <div className="mainBtns columnFlex hoverable" onClick={hideWindow}>
            No
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowDeposits;
