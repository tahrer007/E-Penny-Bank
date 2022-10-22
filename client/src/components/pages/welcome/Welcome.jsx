import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "features/auth/authSlice";
import { Link, useLocation } from "react-router-dom";
import { extendedApiSlice } from "features/users/userSlice";
import { useGetBoxesByUserIdQuery } from "features/boxes/boxesSlice";
import { store } from "app/store";
import Spinner from "components/spinner/Spinner";
import Error from "components/error/Error";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./welcome.scss";
import HomeBody from "components/homeBody/HomeBody";
import { changeDateFormate } from "utils/dateAndTimeFormate";
import Header from "components/header/Header";
import useUserInfo from "hooks/useUserInfo";

const Welcome = () => {
  const { user, welcomeMsg, theme } = useUserInfo();
  useEffect(() => {
    store.dispatch(extendedApiSlice.endpoints.getUsers.initiate());
  }, []);
  const {
    data: boxesForUser,
    isLoading,
    isSuccess,
    isError,
  } = useGetBoxesByUserIdQuery(user._id);

  let content;
  if (!isLoading) {
    content = <Spinner />;
  } else if (isSuccess) {
    content = (
      <main className="columnFlex">
        <HomeBody />
      </main>
    );
  } else if (isError) {
    content = <Error />;
  }

  return (
    <section className={`innerContainer welcomePage ${theme}`}>
      <header>
        <Header text={welcomeMsg} />

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
      <main>
      {content}
      </main>
      
    </section>
  );
};
export default Welcome;
