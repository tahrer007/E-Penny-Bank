import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchallBoxes, selectedBox } from "actions";
import "./home.scss";
//1- render loadig
//2-check local sortage ;
// if has data ... check for update  else login page
//if has data without inter net connection .. load latest data with offline message
//form contain auto log in
//

const Home = ({ fetchallBoxes, users, boxes ,selectedBox }) => {
  useEffect(() => {
    fetchallBoxes();
  }, []);

  const handleBoxSelection = (box) => {
    console.log(box)
    selectedBox(box);
  };

  return (
    <div className="pageContainer homePage">
      {boxes[0]?.map((x) => {
        return (
          <div key={x._id} onClick={()=>handleBoxSelection(x)}>
            {x.totalDeposits}
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return { users: state.users, boxes: state.boxes };
};

export default connect(mapStateToProps, { fetchallBoxes, selectedBox })(Home);
