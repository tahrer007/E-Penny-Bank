import React, { useState, useEffect } from "react";
import "./header.scss";
import SvgLogo from "components/Svg/SvgLogo";
import SvgHome from "components/Svg/SvgHome";
import { useNavigate } from "react-router-dom";
import { capitalizeAll } from "utils/helper"; //welcome
//box title

const titles = {
  logs: "Deposits history",
  boxesList: "Boxes list",
  deposit: "Lets save money",
  newBox: "Create New Box",
  profile: "Profile",
  joinBox: "Join Box",
};

function Header({ text, from }) {
  const title = capitalizeAll(text || titles[from]);

  const navigate = useNavigate();
  return (
    <div className="title mainHeader">
      <div className="logo">
        <SvgLogo />
      </div>
      <h2>{title}</h2>
      <div className="homeBtn" onClick={() => navigate("/welcome")}>
        <SvgHome />
      </div>
    </div>
  );
}

export default Header;
