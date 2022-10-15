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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUsers } from "@fortawesome/free-solid-svg-icons";
function BoxesListPage() {
  const user = useSelector(selectCurrentUser);
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
            <div className="icons">
              <FontAwesomeIcon icon={faUser} /> private Box
            </div>
            <div className="icons">
              <FontAwesomeIcon icon={faUsers} /> Shared Box
            </div>
          </div>
        </header>
        <main className="columnFlex">
          <div className="list boxesList">
            {ids.map((id) => (
              <BoxListItem key={id} boxId={id} box={entities[id]} />
            ))}
          </div>
        </main>
        
      </>
    );
  } else if (isError) {
    <Error />;
  }

  return <section className="innerContainer boxesListPage">{content}</section>;
}

export default BoxesListPage;
