import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoins,
  faFaceSurprise,
  faCircleDollarToSlot,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { checkId } from "services/helper";
import "./detailsInnerBtns.scss";
function InnerButton({ box }) {
  const user = useSelector(selectCurrentUser);
  const isAdmin = checkId(user._id, box.adminId);
  const navigate = useNavigate();
  return (
    <div className="detailsInnerBtns">
      <div
        className="mainBtns columnFlex"
        onClick={() => navigate(`../deposit/${box._id}`, { state: { box } })}
      >
        <FontAwesomeIcon icon={faCircleDollarToSlot} />
        Deposit
      </div>
      <div
        className={`mainBtns columnFlex ${
          !isAdmin && !box?.isAllowedToReveal && "disabled"
        }`}
        onClick={() => console.log("reveal")}
      >
        <FontAwesomeIcon icon={faFaceSurprise} />
        Reveal
      </div>
      <div className="mainBtns columnFlex"
       onClick={() => navigate(`../logs/${box._id}`, { state: { box } })}
      
      >
        <FontAwesomeIcon icon={faCalendarDays} />
        History
      </div>
    </div>
  );
}

export default InnerButton;
