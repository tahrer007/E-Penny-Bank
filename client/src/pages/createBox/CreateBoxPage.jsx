import React, { useState, useEffect } from "react";
import "./createBox.scss" ;
const CreateBox = () => {
  
  
  useEffect(() => {
    console.log("test");
  }, []);

  return (
    <div className="pageContainer newBoxPage">
      new box 
      
    </div>
  );
};

export default CreateBox;
