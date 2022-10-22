import React from "react";
import "./spinner.scss";

export default function Spinner() {
  return (
    <div className="spinnerWrapper columnFlex">
      <div className="wrapper">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
      </div>
    </div>
  );
}
