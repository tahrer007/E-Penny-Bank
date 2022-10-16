import React from "react";
import "./homeBody.scss";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCurrentUser } from "features/auth/authSlice";
import { toggleDarkMode } from "features/them/themSlice";
import { selectedCurrentMode } from "features/them/themSlice";
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
  const navigate = useNavigate();
  const darkMode = useSelector(selectedCurrentMode);
  const dispatch = useDispatch();
  const handleCheck = () => dispatch(toggleDarkMode());
  console.log(darkMode);

  return (
    <div className="innerButtonsWrapper homeMainBody">
      <div className="mainBtns columnFlex">
        <FontAwesomeIcon icon={faUser} />
        Profile
      </div>
      <div
        className="mainBtns columnFlex"
        onClick={() => navigate("../boxesList")}
      >
        <FontAwesomeIcon icon={faPiggyBank} />
        Boxes
      </div>
      <div
        className="mainBtns columnFlex"
        onClick={() => navigate("../box/new")}
      >
        <FontAwesomeIcon icon={faPlus} />
        NewBox
      </div>

      <div className="mainBtns columnFlex" onClick={handleCheck}>
        <FontAwesomeIcon icon={darkMode ? faMoon : faSun} />
        theme
      </div>
      <div></div>
      <div className="mainBtns columnFlex">
        <FontAwesomeIcon icon={faRightFromBracket} className="themeBtn" />
        Log out
      </div>
    </div>
  );
}

export default HomeBody;
