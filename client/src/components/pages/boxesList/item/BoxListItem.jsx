import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./boxListItem.scss";

import { useSelector } from "react-redux";
import { selectCurrentUser } from "features/auth/authSlice";
import { selectUserById } from "features/users/userSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUsers,
  faUserNinja,
} from "@fortawesome/free-solid-svg-icons";
import { checkId } from "services/helper";

const BoxListItem = ({ box, boxId }) => {
  const navigate = useNavigate();

  const user = useSelector(selectCurrentUser);
  const admin = useSelector((state) => selectUserById(state, box.adminId));
  const isAdmin = checkId(user._id, admin.userId);

  const AdminName = ({ isAdmin, admin }) => (
    <div className="adminName">
      <div className="icon">
        <FontAwesomeIcon icon={faUserNinja} />
      </div>

      <span>{isAdmin ? "You" : `${admin.name}`}</span>
    </div>
  );

  const handleOnitemClick = () =>
    navigate(`../box/${boxId}`, { state: { box: box } });

  return (
    <div className={`listItem boxListItem hoverable`} onClick={handleOnitemClick}>
      <div className="name">{box.boxName}</div>
      <div className="icon">
        <FontAwesomeIcon icon={box.type ? faUsers : faUser} />
      </div>
      {box.type ? <AdminName isAdmin={isAdmin} admin={admin} /> : null}
    </div>
  );
};

export default BoxListItem;
