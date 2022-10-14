import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "features/auth/authSlice";
import { Link, useLocation } from "react-router-dom";
import { extendedApiSlice } from "features/users/userSlice";
import { useGetBoxesByUserIdQuery } from "features/boxes/boxesSlice";
import { store } from "app/store";
import Spinner from "components/spinner/Spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./welcome.scss";
import HomeBody from "components/homeBody/HomeBody";
import { changeDateFormate } from "services/dateAndTimeFormate";
import Footer from "components/footer/Footer";
const Welcome = () => {
  const user = useSelector(selectCurrentUser);
  useEffect(() => {
    store.dispatch(extendedApiSlice.endpoints.getUsers.initiate());
  }, []);
  const {
    data: boxesForUser,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetBoxesByUserIdQuery(user._id);

  console.log(user);

  let content;
  if (isLoading) {
    content = <Spinner />;
  } else if (isSuccess) {
    content = (
      <>
        <header>
          <div className="title columnFlex">
            <h2>
              {user?.lastLogIn ? "Welcome back " : "Welcome "}
              {user?.name}
            </h2>
          </div>

          <div className="otherDetails">
            <div className="lastLogIn">
              {user?.lastLogIn
                ? `Last login ${changeDateFormate(user.lastLogIn)}`
                : null}
            </div>

            <div className="reward">
              <FontAwesomeIcon icon={faStar} />
              <span>{user.rewards}</span>
            </div>
          </div>
        </header>
        <main className="columnFlex">
          <HomeBody />
        </main>

        <Footer />
      </>
    );
  } else if (isError) {
    content = <p>{error}</p>;
  }

  return <section className="innerContainer welcomePage">{content}</section>;
};
export default Welcome;
