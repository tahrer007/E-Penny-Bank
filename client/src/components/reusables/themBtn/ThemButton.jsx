import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "features/them/themSlice";
import { selectedCurrentMode } from "features/them/themSlice";

import "./themBtn.scss";

function ThemButton() {
  const currentMode = useSelector(selectedCurrentMode);
  const dispatch = useDispatch();

  const handleCheck = () => dispatch(toggleDarkMode());

  return (
    <div className="toggleWrapper">
      <input
        type="checkbox"
        className="dn"
        id="dn"
        onChange={handleCheck}
        value={currentMode}
        checked={currentMode}
      />
      <label htmlFor="dn" className="toggle">
        <span className="toggle__handler">
          <span className="crater crater--1"></span>
          <span className="crater crater--2"></span>
          <span className="crater crater--3"></span>
        </span>
        <span className="star star--1"></span>
        <span className="star star--2"></span>
        <span className="star star--3"></span>
        <span className="star star--4"></span>
        <span className="star star--5"></span>
        <span className="star star--6"></span>
      </label>
    </div>
  );
}

export default ThemButton;
