import React, { useEffect, useState } from "react";
import { makeKey, checkId } from "services/helper";
import { SHARED_BOX } from "services/const";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "features/auth/authSlice";
import "./sharedBoxDetails.scss";

const SharedBoxDetails = ({ newBox, boxDetails, getSharedBoxDetails }) => {
  const user = useSelector(selectCurrentUser);
  const boxKey = useState(boxDetails?.boxKey || makeKey());
  const [isAllowedToReveal, setIsAllowedToReveal] = useState(
    boxDetails?.isAllowedToReveal || false
  );
  let isAdmin = checkId(user._id, boxDetails.adminId);

  useEffect(() => {
    if (!boxKey) return;
    getSharedBoxDetails({ boxKey, isAllowedToReveal });
  }, [isAllowedToReveal]);

  const share = () => {
    if (newBox) return;
  };

  return (
    <div className="sharedBoxDetailsWrapper">
      <div className="details"></div>
      <div className="usersList"></div>
      {/*<div className="keyBox">
        <div className="key">{boxKey}</div>
        <div className="shareKey" onClick={share}>
          <button
            disabled={!newBox}
            onClick={share}
            className={newBox ? "disabled" : ""}
          >
            Shared icon
          </button>
        </div>
      </div>
      {(newBox || isAdmin) && (
        <div className="authorized">
          <div className="revealBox">
            <input
              type="checkbox"
              checked={isAllowedToReveal}
              value="allow"
              onChange={() => setIsAllowedToReveal(!isAllowedToReveal)}
            />
            allow other users to reveal history
          </div>
      </div>
      )}*/}
    </div>
  );
};
export default SharedBoxDetails;
