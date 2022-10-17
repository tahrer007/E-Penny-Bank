import React from "react";
import "./usersList.scss";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "features/auth/authSlice";
import { selectUserById } from "features/users/userSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserNinja } from "@fortawesome/free-solid-svg-icons";
import "./usersList.scss";
import { checkId } from "services/helper";

function UsersList({ boxDetails }) {
  const { usersId, adminId } = boxDetails;
  const user = useSelector(selectCurrentUser);
  
  const Item = ({ id }) => {
    const selectedUser = useSelector((state) => selectUserById(state, id));
    const isAdmin = checkId(selectedUser.userId, adminId);
    console.log(selectedUser, isAdmin);

    return (
      <div className="listItem userItem hoverd">
        {selectedUser.name}

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
