import React, { useState } from "react";
import SharedBoxDetails from "components/sharedBoxDetails/SharedBoxDetails";
import "./boxDetails.scss";

const box = {
  type: 1,
  totalDeposits: 0,
  usersId: ["6331f73f92d30d25c7103d29"],
  adminId: "6331f73f92d30d25c7103d29",
  depositsHistory: [{}],
  boxKey: "testtttt",
  isAllowedToReveal: true,
  _id: "6331f7d692d30d25c7103d2d",
  createdAt: "2022-09-26T19:04:54.725Z",
  updatedAt: "2022-09-26T19:04:54.725Z",
  __v: 0,
};
const SavingBox = ({ boxId }) => {
  const getSharedBoxDetails = ({ boxKey, isAllowedToReveal }) =>
    console.log(boxKey, isAllowedToReveal);

  return (
    <div className="pageContainer box">
      <div className="boxMainDetails">
            <div className="name">{box.boxName}</div>
            <div className="totalDeposit"></div>
            <div className="date latestUpdate"></div>
            <div className="date createdDate"></div>

      </div>
      {box.type ? (
        <SharedBoxDetails
          newBox={false}
          getSharedBoxDetails={getSharedBoxDetails}
          boxDetails ={box}
        />
      ) : null}
    </div>
  );
};

export default SavingBox;
