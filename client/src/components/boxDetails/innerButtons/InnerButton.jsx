import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoins,
  faFaceSurprise,
  faCircleDollarToSlot,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./detailsInnerBtns.scss"
function InnerButton({ box }) {
  const navigate = useNavigate();
  return (
    <div className="detailsInnerBtns">
      <div className="innerBtn columnFlex">
        <FontAwesomeIcon icon={faCircleDollarToSlot} />
        Deposit
      </div>
      <div
        className="innerBtn columnFlex"
        onClick={() => navigate("../boxesList")}
      >
        <FontAwesomeIcon icon={faFaceSurprise} />
        Reveal
      </div>
      <div className="innerBtn columnFlex">
        <FontAwesomeIcon icon={faCalendarDays} />
        History
      </div>
    </div>
  );
}

export default InnerButton;

/**  <div><div className="buttonsBox">
    <div className="deposit">
      <Link to={`../deposit/${box._id}`}>deposit</Link>
    </div>
    <div className="history">history</div>
    <div className="save">save</div>
  </div></div> */
