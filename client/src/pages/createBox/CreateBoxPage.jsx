import React, { useState, useEffect } from "react";
import "./createBox.scss";
const CreateBox = () => {
  useEffect(() => {
    console.log("test");
  }, []);

  return <div className="pageContainer newBoxPage">
    <div className="boxDetails">
    box Details 
    </div>
    <div className="sharedBoxDetails"> shared Box Details</div>
    <div className="createBtn"> createBtn</div>
  
  
  
  </div>;
};

export default CreateBox;
