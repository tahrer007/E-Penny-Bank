import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectAllBoxes } from "features/boxes/boxesSlice";
//import { fetchallBoxes, selectBox, unselectBox } from "actions";
import "./home.scss";
//1- render loadig
//2-check local sortage ;
// if has data ... check for update  else login page
//if has data without inter net connection .. load latest data with offline message
//form contain auto log in
//
const Home = () => {
  const allBoxes = useSelector(selectAllBoxes);

  return (
    <div className="pageContainer homePage">
    {//TODO : IF THERE IS NO BOXES PAGE WITH MESSAGE }
}
      {allBoxes?.map((x) => {
        return <div key={x._id}>{x.totalDeposits}</div>;
      })}
    </div>
  );
};



export default Home;
