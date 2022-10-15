import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./boxListItem.scss";

import { useSelector } from "react-redux";
import { selectCurrentUser } from "features/auth/authSlice";
import { selectUserById } from "features/users/userSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUsers } from "@fortawesome/free-solid-svg-icons";

const BoxListItem = ({ box, boxId }) => {
  const [fade, setFade] = useState(false);
  const navigate = useNavigate();

  const user = useSelector(selectCurrentUser);
  const admin = useSelector((state) => selectUserById(state, box.adminId));

  const adminDetails = () => {
    console.log(user, admin);
    if (user._id === admin.userId) return "admin :You";
    else return` admin :${admin.name}`;
  };

  const handleOnitemClick = () => {
    //state={{ box: box }}
    /*

<Link to={`/box/${boxId}`} state={{ box: box }}>
        {box.boxName} {box.type} {box.type ? adminDetails() : null}
      </Link>
 */
    console.log("clicked");
    setFade(true);
    navigate(`../box/${boxId}`, { state: { box: box } });
  };
  return (
    <div
      className={`boxListItem ${fade ? "fade" : ""}`}
      onClick={handleOnitemClick}
      onAnimationEnd={() => setFade(false)}
    >
      <div className="left">
        {box.boxName} <FontAwesomeIcon icon={box.type ? faUsers : faUser} />
      </div>
      <div className="right">{box.type ? adminDetails() : null}</div>
    </div>
  );
};

export default BoxListItem;
