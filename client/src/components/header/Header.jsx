import React from "react";
import "./header.scss";
import SvgLogo from "components/Svg/logo/SvgLogo";
import SvgHome from "components/Svg/homeIcon/SvgHome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <header className="mainHeader">
      <div className="logo">
        <SvgLogo />
      </div>
      <div className="homeBtn columnFlex" onClick={()=>navigate("./home")}>
        <SvgHome/>
      </div>
    </header>
  );
}

export default Header;
