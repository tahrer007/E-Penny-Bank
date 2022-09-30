import React, { useEffect, useState } from "react";
import { makeKey } from "services/helper";
import { SHARED_BOX } from "services/const";
import "./sharedBoxDetails.scss";
const userId = "6331f73f92d30d25c7103d29";
const SharedBoxDetails = ({ newBox, boxDetails, getSharedBoxDetails }) => {
  const [boxKey, setBoxKey] = useState(boxDetails?.boxKey);
  const [isAllowedToReveal, setIsAllowedToReveal] = useState(
    boxDetails?.isAllowedToReveal || false
  );
  let isAdmin =
    boxDetails?.type === SHARED_BOX && userId === boxDetails.adminId;

  useEffect(() => {
    if (newBox) setBoxKey(makeKey());
  }, [newBox]);

  useEffect(() => {
    if (!boxKey) return;
    getSharedBoxDetails({ boxKey, isAllowedToReveal });
  }, [isAllowedToReveal, boxKey]);

  const share = () => {
    if (newBox) return;
  };

  return (
    <div className="sharedBoxDetails">
      <div className="keyBox">
        <div className="key">{boxKey}</div>
        {
          //TODO:add unclickable style on share button}}
        }
        <div className="shareKey" onClick={share}>
          <button disabled={!newBox} onclick={share}>
            shared icon
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
      )}
    </div>
  );
};
export default SharedBoxDetails;
