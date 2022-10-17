import React from "react";
import "./boxesList.scss";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "features/auth/authSlice";
import { useGetBoxesByUserIdQuery } from "features/boxes/boxesSlice";
import { selectedCurrentMode } from "features/them/themSlice";

import Spinner from "components/spinner/Spinner";
import Error from "components/error/Error";
import BoxListItem from "../item/BoxListItem";
import Header from "components/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUsers,
  faUserNinja,
} from "@fortawesome/free-solid-svg-icons";
function BoxesListPage() {
  const user = useSelector(selectCurrentUser);
  const {
    data: boxesForUser,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetBoxesByUserIdQuery(user._id);
  const darkMode = useSelector(selectedCurrentMode);
  const theme = darkMode ? "dark" : "light";
  let content;

  if (isLoading) {
    return <Spinner />;
  } else if (isSuccess) {
    const { ids, entities } = boxesForUser;
    console.log(boxesForUser);
    content = (
      <>
        <header>
          <Header from={"boxesList"} />
          <div className="otherDetails">
            <div className="icons">
              <FontAwesomeIcon icon={faUser} /> private Box
            </div>
            <div className="icons">
              <FontAwesomeIcon icon={faUsers} /> Shared Box
            </div>
            <div className="icons">
              <FontAwesomeIcon icon={faUserNinja} /> Admin name
            </div>
          </div>
        </header>
        <main className="startColumnFlex">
          <div className="list boxesList">
            {ids.map((id) => (
              <BoxListItem key={id} boxId={id} box={entities[id]} />
            ))}
            {ids.map((id) => (
              <BoxListItem key={id} boxId={id} box={entities[id]} />
            ))}
            {ids.map((id) => (
              <BoxListItem key={id} boxId={id} box={entities[id]} />
            ))}
            {ids.map((id) => (
              <BoxListItem key={id} boxId={id} box={entities[id]} />
            ))}
            {ids.map((id) => (
              <BoxListItem key={id} boxId={id} box={entities[id]} />
            ))}

            {ids.map((id) => (
              <BoxListItem key={id} boxId={id} box={entities[id]} />
            ))}
            {ids.map((id) => (
              <BoxListItem key={id} boxId={id} box={entities[id]} />
            ))}
            {ids.map((id) => (
              <BoxListItem key={id} boxId={id} box={entities[id]} />
            ))}
            {ids.map((id) => (
              <BoxListItem key={id} boxId={id} box={entities[id]} />
            ))}

            {ids.map((id) => (
              <BoxListItem key={id} boxId={id} box={entities[id]} />
            ))}

            {ids.map((id) => (
              <BoxListItem key={id} boxId={id} box={entities[id]} />
            ))}
            {ids.map((id) => (
              <BoxListItem key={id} boxId={id} box={entities[id]} />
            ))}
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

  return <section className={`innerContainer boxesListPage ${theme}`}>{content}</section>;
}

export default BoxesListPage;
