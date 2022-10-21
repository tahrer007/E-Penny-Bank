import React, { useState } from "react";
import ShowDeposits from "components/boxDetails/showDeposits/ShowDeposits";
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
import { checkId } from "utils/helper";
import "./detailsInnerBtns.scss";

function InnerButton({ box }) {
  const [showDeposits, setShowDeposits] = useState(false);
  const user = useSelector(selectCurrentUser);
  const isAdmin = checkId(user._id, box.adminId);
  const navigate = useNavigate();
  const hideWindow =()=>setShowDeposits(false) ; 

  return (
    <div className="detailsInnerBtns">
      <div
        className="mainBtns columnFlex hoverable"
        onClick={() => navigate(`../deposit/${box._id}`, { state: { box } })}
      >
        <FontAwesomeIcon icon={faCircleDollarToSlot} />
        Deposit
      </div>
      <div
        className={`mainBtns columnFlex  ${
          !isAdmin && !box?.isAllowedToReveal ? "disabled" : "hoverable"
        }`}
        onClick={() => setShowDeposits(true)}
      >
        <FontAwesomeIcon icon={faFaceSurprise} />
        Reveal
      </div>
      <div
        className="mainBtns columnFlex hoverable"
        onClick={() => navigate(`../logs/${box._id}`, { state: { box } })}
      >
        <FontAwesomeIcon icon={faCalendarDays} />
        History
      </div>
      { showDeposits ? <ShowDeposits hideWindow={hideWindow} deposits={box.totalDeposits} /> : null }
    </div>
  );
}

export default InnerButton;
