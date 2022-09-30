import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchallBoxes, selectBox, unselectBox } from "actions";
import "./home.scss";
//1- render loadig
//2-check local sortage ;
// if has data ... check for update  else login page
//if has data without inter net connection .. load latest data with offline message
//form contain auto log in
//

const Home = ({
  fetchallBoxes,
  users,
  boxes,
  selectedBox,
  selectBox,
  unselectBox,
}) => {
  useEffect(() => {
    fetchallBoxes();
  }, []);

  const handleBoxSelection = (box) => {
    selectBox(box)
    setTimeout(() => {
      unselectBox();
    }, 3000);
  };

  return (
    <div className="pageContainer homePage">
      {boxes[0]?.map((x) => {
        return (
          <div key={x._id} onClick={() => handleBoxSelection(x)}>
            {x.totalDeposits}
          </div>
        );
      })}
    </div>
  );
};
const test = () => ({ type: 'UNSELECT_BOX' })

const mapStateToProps = ( state, ownProps) => {

  return {
    users: state.users,
    boxes: state.boxes,
    selectedBox: state.selectedBox,
    
  };
};

export default connect(mapStateToProps, {
  fetchallBoxes,
  selectBox,
  unselectBox,
})(Home);
