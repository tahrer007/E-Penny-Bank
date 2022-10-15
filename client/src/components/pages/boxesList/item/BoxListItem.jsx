import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./boxListItem.scss";

import { useSelector } from "react-redux";
import { selectCurrentUser } from "features/auth/authSlice";
import { selectUserById } from "features/users/userSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUsers } from "@fortawesome/free-solid-svg-icons";

const BoxListItem = ({ box, boxId }) => {
  const navigate = useNavigate();

  const user = useSelector(selectCurrentUser);
  const admin = useSelector((state) => selectUserById(state, box.adminId));

  const adminDetails = () => {
    //console.log(user, admin);
    if (user._id === admin.userId) return "admin :You";
    else return ` admin :${admin.name}`;
  };

  const handleOnitemClick = () =>
    navigate(`../box/${boxId}`, { state: { box: box } });

  return (
    <div className={`listItem boxListItem`} onClick={handleOnitemClick}>
      <div className="name">{box.boxName}</div>
      <div className="icon">
        <FontAwesomeIcon icon={box.type ? faUsers : faUser} />
      </div>

      <div className="adminName">{box.type ? adminDetails() : null}</div>
    </div>
  );
};

export default BoxListItem;
