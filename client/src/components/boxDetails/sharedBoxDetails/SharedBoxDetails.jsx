import React, { useEffect, useState } from "react";
import { makeKey, checkId } from "services/helper";
import { SHARED_BOX } from "services/const";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "features/auth/authSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareFromSquare } from "@fortawesome/free-solid-svg-icons";
import "./sharedBoxDetails.scss";

const SharedBoxDetails = ({ newBox, boxDetails, getSharedBoxDetails }) => {
  const user = useSelector(selectCurrentUser);
  const boxKey = boxDetails?.boxKey || makeKey();
  const [isAllowedToReveal, setIsAllowedToReveal] = useState(
    boxDetails?.isAllowedToReveal || false
  );
  let isAdmin = checkId(user._id, boxDetails.adminId);
  console.log(isAdmin);

  useEffect(() => {
    if (!boxKey) return;
    getSharedBoxDetails({ boxKey, isAllowedToReveal });
  }, [isAllowedToReveal]);

  const share = () => {
    if (newBox) return;
  };

  return (
    <div className="sharedBoxDetailsWrapper">
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
          <input
            type="checkbox"
            checked={isAllowedToReveal}
            //value={isAllowedToReveal}
            onChange={() => setIsAllowedToReveal(!isAllowedToReveal)}
            disabled={!newBox && !isAdmin}
          />
          <label>allow users to reveal deposits and history</label>
        </div>
      </div>
      <div className="usersList">userList</div>
      {/*
      {(newBox || isAdmin) && (
        <div className="authorized" 
            <input
              type="checkbox"
              
            />
           
          
      </div>
      )}*/}
    </div>
  );
};
export default SharedBoxDetails;
