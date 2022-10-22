import React from "react";
import "./spinner.scss";

export default function Spinner() {
  return (
    <div className="spinnerWrapper columnFlex">
      <div class="wrapper">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="shadow"></div>
        <div class="shadow"></div>
        <div class="shadow"></div>
      </div>
    </div>
  );
}
