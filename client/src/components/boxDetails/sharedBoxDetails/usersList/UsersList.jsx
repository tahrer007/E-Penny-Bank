import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "features/auth/authSlice";
import { selectUserById } from "features/users/userSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserNinja } from "@fortawesome/free-solid-svg-icons";
import { checkId } from "utils/helper";
import { capitalizeAll } from "utils/helper";

import "./usersList.scss";

function UsersList({ boxDetails }) {
  const { usersId, adminId } = boxDetails;
  const user = useSelector(selectCurrentUser);

  const Item = ({ id }) => {
    const selectedUser = useSelector((state) => selectUserById(state, id));
    const isAdmin = checkId(selectedUser.userId, adminId);

    return (
      <div className="listItem userItem hoverable">
        {capitalizeAll(selectedUser.name)}

        {isAdmin && (
          <FontAwesomeIcon icon={faUserNinja} className="adminIcon" />
        )}
      </div>
    );
  };

  return (
    <div className="list usersList ">
      {usersId?.map((id) =>
        id === user._id ? null : <Item key={id} id={id} />
      )}
    </div>
  );
}

export default UsersList;
