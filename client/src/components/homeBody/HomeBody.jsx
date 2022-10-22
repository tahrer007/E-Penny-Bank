import React, { useEffect } from "react";
import "./homeBody.scss";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleDarkMode } from "features/theme/themeSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { logOut } from "features/auth/authSlice";
import {
  faUser,
  faPiggyBank,
  faPlus,
  faSun,
  faMoon,
  faRightFromBracket,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import useUserInfo from "hooks/useUserInfo";

function HomeBody() {
  const { user, theme, token } = useUserInfo();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleCheck = () => dispatch(toggleDarkMode());

  return (
    <div className="innerButtonsWrapper homeMainBody">
      <div
        className="mainBtns columnFlex hoverable"
        onClick={() => navigate("../profile")}
      >
        <FontAwesomeIcon icon={faUser} />
        Profile
      </div>
      <div
        className="mainBtns columnFlex hoverable"
        onClick={() => navigate("../boxesList")}
      >
        <FontAwesomeIcon icon={faPiggyBank} />
        Boxes
      </div>
      <div
        className="mainBtns columnFlex hoverable"
        onClick={() => navigate("../box/new")}
      >
        <FontAwesomeIcon icon={faPlus} />
        NewBox
      </div>

      <div className="mainBtns columnFlex hoverable" onClick={handleCheck}>
        <FontAwesomeIcon icon={theme === "dark" ? faMoon : faSun} />
        Theme
      </div>
      <div
        className="mainBtns columnFlex hoverable"
        onClick={() => navigate("../joinBox")}
      >
        <FontAwesomeIcon icon={faRightToBracket} />
        Join
      </div>

      <div
        className="mainBtns columnFlex hoverable"
        onClick={() => dispatch(logOut({ user, token }))}
      >
        <FontAwesomeIcon icon={faRightFromBracket} className="themeBtn" />
        Log out
      </div>
    </div>
  );
}

export default HomeBody;
