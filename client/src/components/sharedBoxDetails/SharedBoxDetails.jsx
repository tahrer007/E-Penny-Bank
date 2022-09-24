import React, { useEffect, useState } from "react";
import { makeKey } from "services/helper";
import "./sharedBoxDetails.scss";

const SharedBoxDetails = ({ boxDetails, newBox }) => {
  const [boxKey, setBoxKey] = useState(boxDetails?.key);

  useEffect(() => {
   if( newBox)setBoxKey(makeKey());
  }, []);
  return (
    <div className="sharedBoxDetails">
      <div className="keyBox">
        <div className="key">{boxKey}</div>
        <div className="shareKey">sharedIcon</div>
      </div>
      {(newBox || boxDetails.admin) && (
        <div className="authorized">allow other users to reveal history</div>
      )}
    </div>
  );
};
export default SharedBoxDetails;
