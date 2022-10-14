import React from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectCurrentUser } from "features/auth/authSlice";
import { selectUserById } from "features/users/userSlice";
/*
const { ids, entities } = boxesForUser;
    console.log(boxesForUser);
    content = ids.map((id) => (
      <li key={id}>
        {box.totalDeposits}

        <Link to={`/box/${id}`} state={{ box: entities[id] }}>
          {entities[id].boxName}
        </Link>
      </li>
    ));
*/

const BoxListItem = ({ box, boxId }) => {
  const user = useSelector(selectCurrentUser);
  const admin = useSelector((state) => selectUserById(state, box.adminId));

  const adminDetails = () => {
    console.log(user, admin);
    if (user._id === admin.userId) return "you";
    else return admin.name;
  };
  return (
    <li>
      <Link to={`/box/${boxId}`} state={{ box: box }}>
        {box.boxName} {box.type} {box.type ? adminDetails() : null}
      </Link>
    </li>
  );
};

export default BoxListItem;
