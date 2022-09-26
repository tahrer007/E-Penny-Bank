import React, { useEffect, useState } from "react";
import { makeKey } from "services/helper";
import "./sharedBoxDetails.scss";

const SharedBoxDetails = ({ newBox, boxDetails,getSharedBoxDetails }) => {
  const [boxKey, setBoxKey] = useState(boxDetails?.key);
  const [isAllowedToReveal, setIsAllowedToReveal] = useState(
    boxDetails?.isAllowedToReveal || false
  );


  useEffect(() => {
    if (newBox) setBoxKey(makeKey());
  }, [newBox]);

  useEffect(() => {
    if(!boxKey) return ; 
    getSharedBoxDetails({boxKey,isAllowedToReveal});
  }, [isAllowedToReveal]);

  const share = () => {
    if (newBox) return;
    console.log(boxKey);
  };
  

  return (
    <div className="sharedBoxDetails">
      <div className="keyBox">
        <div className="key">{boxKey}</div>
        {
          //TODO:add unclickable style on share button}}
        }
        <div className="shareKey" onClick={share}>
          shared icon
        </div>
      </div>
      {(newBox || boxDetails.admin) && (
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
