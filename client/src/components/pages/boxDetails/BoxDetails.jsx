import React, { useState, useEffect } from "react";
import useUserInfo from "hooks/useUserInfo";
import SharedBoxDetails from "components/boxDetails/sharedBoxDetails/SharedBoxDetails";
import { useNavigate, useLocation } from "react-router-dom";
import { changeDateFormate } from "utils/dateAndTimeFormate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faUser, faUsers } from "@fortawesome/free-solid-svg-icons";
import InnerButton from "components/boxDetails/innerButtons/InnerButton";
import Header from "components/header/Header";

import "./boxDetails.scss";
const SavingBox = () => {
  const location = useLocation();
  const navigate=useNavigate() ; 
  const { box } = location.state;
  if (!box) navigate("../../welcome");
  const historyArrLength = box.depositsHistory.length;
  const { theme } = useUserInfo();

  

  return (
    <section className={`innerContainer boxdetailsSection ${theme}`}>
      <header>
        <Header text={box.boxName} />
        <div className="otherDetails">
          <div className="dates">
            created at : {changeDateFormate(box.createdAt)}
          </div>

          <div className="reward">
            <FontAwesomeIcon icon={faStar} />
            deposits counter : <span>{historyArrLength}</span>
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={box.type ? faUsers : faUser} />
          </div>
        </div>
      </header>
      <main>
        {!box.type ? null : (
          <SharedBoxDetails newBox={false} boxDetails={box} />
        )}
      </main>
      <footer>
        <InnerButton box={box} />
      </footer>
    </section>
  );
};

export default SavingBox;
