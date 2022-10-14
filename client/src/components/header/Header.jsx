import React from "react";
import "./header.scss";
import SvgLogo from "components/Svg/logo/SvgLogo";

function Header() {
  return (
    <header className="mainHeader">
      <div className="logo">
        <SvgLogo />
      </div>
      <div className="homeBtn">
        
      </div>
    </header>
  );
}

export default Header;
