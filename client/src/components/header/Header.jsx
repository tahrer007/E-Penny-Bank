import React from "react";
import "./header.scss";
import SvgLogo from "components/header/Svg/SvgLogo";
import SvgHome from "components/header/Svg/SvgHome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="title mainHeader">
      <div className="logo">
        <SvgLogo />
      </div>
      <h2>Deposits history</h2>
      <div className="homeBtn" onClick={() => navigate("./home")}>
        <SvgHome />
      </div>
    </div>
  );
}

export default Header;
