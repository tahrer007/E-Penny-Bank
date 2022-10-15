import React, { useEffect, useState } from "react";
import { makeKey, checkId } from "services/helper";
import { SHARED_BOX } from "services/const";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "features/auth/authSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareFromSquare } from "@fortawesome/free-solid-svg-icons";
import UsersList from "./usersList/UsersList";
import "./sharedBoxDetails.scss";

const SharedBoxDetails = ({ newBox, boxDetails, getSharedBoxDetails }) => {
  const [boxKey, setBoxKey] = useState(boxDetails?.boxKey || makeKey());
  const user = useSelector(selectCurrentUser);

  const [isAllowedToReveal, setIsAllowedToReveal] = useState(
    boxDetails?.isAllowedToReveal || false
  );
  let isAdmin = checkId(user._id, boxDetails?.adminId);

  useEffect(() => {
    if (!boxKey) return;
    getSharedBoxDetails({ boxKey, isAllowedToReveal });
  }, [isAllowedToReveal]);

  const share = () => {
    if (newBox) return;
  };

  return (
    <div className={"sharedBoxDetailsWrapper"}id ={newBox ? "newBox" : "details"}>
      <div className="details">
        <div className="keyBox">
          <div className="key">{boxKey} </div>
          {!newBox && (
            <FontAwesomeIcon
              icon={faShareFromSquare}
              onClick={() => console.log("Test")}
              className="shareIcon"
            />
          )}
        </div>
        <div className="authorized">
          <label>
            <input
              type="checkbox"
              checked={isAllowedToReveal}
              //value={isAllowedToReveal}
              onChange={() => setIsAllowedToReveal(!isAllowedToReveal)}
              disabled={!newBox && !isAdmin}
              className="cbx"
            />
            allow users to reveal deposits and history
          </label>
        </div>
      </div>
      {!newBox && (
        <div className="usersListWrapper">
          <h3 className="subtitle">Other users </h3>
          <UsersList boxDetails={boxDetails} />
        </div>
      )}
    </div>
  );
};
export default SharedBoxDetails;