import React, { useState, useEffect } from "react";
import SharedBoxDetails from "components/reusables/sharedBoxDetails/SharedBoxDetails";
import { formatRelative } from "date-fns";
import enGB from "date-fns/locale/en-GB";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectBoxById ,selectAllBoxes,selectBoxesIds } from "features/boxes/boxesSlice";
import "./boxDetails.scss";
const format = {
  yesterday: "'Yesterday'",
  today: "'Today'",
  tomorrow: "'Tomorrow'",
  other: "dd/MM/yyyy",
};

const SavingBox = () => {
  const { boxId } = useParams();
  const box = useSelector((state) =>{ 
    console.log(state.api)
    return selectBoxById(state,boxId)});
  console.log(box)


  const getSharedBoxDetails = ({ boxKey, isAllowedToReveal }) =>
    console.log(boxKey, isAllowedToReveal);

  const locale = {
    ...enGB,
    formatRelative: (token) => format[token],
  };

  return (
    <div className="pageContainer boxDetails">
      <div className="MainDetails">

        {box}
        {/*<div className="name">{box?.boxName}</div>
        <div className="totalDeposit">{box?.totalDeposits}</div>
        <div className="date latestUpdate">
          {formatRelative(Date.parse(box?.updatedAt), new Date())}
        </div>
        <div className="date createdDate">
          {formatRelative(Date.parse(box?.createdAt), new Date(), { locale })}
        </div>*/}
      </div>
      {box?.type ? (
        <SharedBoxDetails
          newBox={false}
          getSharedBoxDetails={getSharedBoxDetails}
          boxDetails={box}
        />
      ) : null}
      <div className="buttonsBox">
        <div className="deposit">deposit</div>
        <div className="history">history</div>
        <div className="save">save</div>
      </div>
    </div>
  );
};

export default SavingBox;
