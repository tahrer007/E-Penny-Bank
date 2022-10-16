import React, { useState, useEffect } from "react";
import "./depositsLogs.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { selectCurrentUser } from "features/auth/authSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { selectUserById } from "features/users/userSlice";
import { checkId } from "services/helper";
import { useSelector } from "react-redux";

function DepositsLogs() {
  const user = useSelector(selectCurrentUser);
  const { boxId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { box } = location.state;
  //if (box) navigate("/");
  const canReveal = box.isAllowedToReveal || checkId(user._id || box.adminId);
  const Item = (log)=> {
    const user = ((state)=> selectUserById(state,log.userId))  ;
    return (<div> {log.deposit} </div>)
 }

  
  
  return <div>Deposits Logs</div>;

}

export default DepositsLogs;
