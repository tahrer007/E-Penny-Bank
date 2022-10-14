import React from "react";
import "./homeBody.scss";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "features/auth/authSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPiggyBank,
  faPlus,
  faSun,
  faMoon,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

function HomeBody() {
  const user = useSelector(selectCurrentUser);

  return (
    <div className="navButtonsWrapper">
      <div className="navButton columnFlex">
        <FontAwesomeIcon icon={faUser} />
        Profile
      </div>
      <div className="navButton columnFlex">
        <FontAwesomeIcon icon={faPiggyBank} />
        Boxes
      </div>
      <div className="navButton columnFlex">
        <FontAwesomeIcon icon={faPlus} />
        NewBox
      </div>

      <div className="navButton columnFlex">
        <FontAwesomeIcon icon={faMoon} />
        theme
      </div>
    <div></div>
      <div className="navButton columnFlex">
        <FontAwesomeIcon icon={faRightFromBracket} />
        Log out
      </div>
    </div>
  );
}

export default HomeBody;
