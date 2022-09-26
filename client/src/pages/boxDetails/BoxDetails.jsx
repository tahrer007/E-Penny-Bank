import React, { useState } from "react";
import SharedBoxDetails from "components/sharedBoxDetails/SharedBoxDetails";
import "./boxDetails.scss";

const box = {
  boxName: "vication",
  type: 1,
  totalDeposits: 0,
  usersId: ["6331f73f92d30d25c7103d29"],
  adminId: "6331f73f92d30d25c7103d29",
  depositsHistory: [{}],
  boxKey: "testtttt",
  isAllowedToReveal: true,
  _id: "63321e602105c96f0f3f57ed",
  createdAt: "2022-09-26T21:49:20.156Z",
  updatedAt: "2022-09-26T21:49:20.156Z",
  __v: 0,
};
const SavingBox = ({ boxId }) => {
  const getSharedBoxDetails = ({ boxKey, isAllowedToReveal }) =>
    console.log(boxKey, isAllowedToReveal);

  return (
    <div className="pageContainer boxDetails">
      <div className="MainDetails">
        <div className="name">{box.boxName}</div>
        <div className="totalDeposit"></div>
        <div className="date latestUpdate"></div>
        <div className="date createdDate"></div>
      </div>
      {box.type ? (
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
