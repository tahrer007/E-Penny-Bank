import React from "react";
import "./boxesList.scss";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "features/auth/authSlice";
import { selectUserById } from "features/users/userSlice";
import { useGetBoxesByUserIdQuery } from "features/boxes/boxesSlice";
import Spinner from "components/spinner/Spinner";
import Footer from "components/footer/Footer";
import { Link } from "react-router-dom";
import Error from "components/error/Error";
import BoxListItem from "../item/BoxListItem";
function BoxesListPage() {
  const user = useSelector(selectCurrentUser);
  //if(!user)NAVIGATE TO LOGIN PAGE !!

  /*<li key={id}>
  {entities[id].totalDeposits}

  <Link to={`/box/${id}`} state={{ box: entities[id] }}>
    {entities[id].boxName}
  </Link>
</li>*/

  const {
    data: boxesForUser,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetBoxesByUserIdQuery(user._id);

  let content;

  if (isLoading) {
    return <Spinner />;
  } else if (isSuccess) {
    const { ids, entities } = boxesForUser;
    console.log(boxesForUser);
    content = (
      <>
        <header>
          <div className="title">
            <h2>Boxes list</h2>
          </div>
          <div className="otherDetails">
            otherdetails 
          </div>
        </header>
        <main className="columnFlex">
          <div className="list">
          {ids.map((id) => (
            <BoxListItem key={id} boxId={id} box={entities[id]} />
          ))}
          </div>
          
        </main>
        <Footer />
      </>
    );
  } else if (isError) {
    <Error />;
  }

  return <section className="innerContainer boxesListPage">{content}</section>;
}

export default BoxesListPage;
