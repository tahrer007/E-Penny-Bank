import React, { useState, useEffect } from "react";
import "./createBox.scss";
const CreateBox = () => {
  useEffect(() => {
    console.log("test");
  }, []);

  return (
    <div className="pageContainer newBoxPage">
      <div className="boxDetails">
        <label>
          Box name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
      </div>
      <div className="sharedBoxDetails"> shared Box Details</div>
      <div className="createBtn"> createBtn</div>
    </div>
  );
};

export default CreateBox;
