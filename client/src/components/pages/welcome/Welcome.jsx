import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "features/auth/authSlice";
import { Link, useLocation } from "react-router-dom";
import { extendedApiSlice } from "features/users/userSlice";
import { useGetBoxesByUserIdQuery } from "features/boxes/boxesSlice";
import { store } from "app/store";
import enGB from "date-fns/locale/en-GB";
import { format, formatDistance, formatRelative, subDays } from "date-fns";
import Spinner from "components/spinner/Spinner";

import "./welcome.scss";

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
    const { ids, entities } = boxesForUser;
    console.log(boxesForUser);
    content = ids.map((id) => (
      <li key={id}>
        {entities[id].totalDeposits}

        <Link to={`/box/${id}`} state={{ box: entities[id] }}>
          {entities[id].boxName}
        </Link>
      </li>
    ));
  } else if (isError) {
    content = <p>{error}</p>;
  }

  return (
    <section className="innerContainer">
      <header>
        <div className="title columnFlex">
          <h2>
            {user?.lastLogIn ? "Welcome back " : "Welcome "}
            {user?.name}
          </h2>
        </div>

        <div className="otherDetails">
          <div className="reward"> reward </div>
          <div className="lastLogIn">Last logIn</div>
        </div>
      </header>
      <main>yrysdfsdf</main>

      <footer></footer>
      <h2></h2>

      <ol>{content}</ol>
      <Link to={"../newBox"}>new box</Link>
      <Link to={"../addUser"}>addUser</Link>
    </section>
  );
};
export default Welcome;
