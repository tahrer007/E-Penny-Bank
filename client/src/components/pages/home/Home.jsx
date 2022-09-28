import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchBoxes } from "actions";
import "./home.scss";
//1- render loadig
//2-check local sortage ;
// if has data ... check for update  else login page
//if has data without inter net connection .. load latest data with offline message
//form contain auto log in
//

const Home = ({fetchBoxes}) => {
  useEffect(() => {
    fetchBoxes();
   
  }, []);
  const [loading, setLoading] = useState(true);

  return <div className="pageContainer homePage">home</div>;
};

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(null,{fetchBoxes})(Home);
