import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser, selectCurrentToken } from "features/auth/authSlice";
import { Link, useLocation } from "react-router-dom";
import { extendedApiSlice } from "features/users/userSlice";
import { useGetBoxesByUserIdQuery } from "features/boxes/boxesSlice";
import { store } from "app/store";

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

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    const { ids, entities } = boxesForUser;
    console.log(boxesForUser);
    content = ids.map((id) => (
      <li key={id}>
        {entities[id].totalDeposits}
        {"     "}

        <Link to={`/box/${id}`} state={{ box: entities[id] }}>
          {entities[id].boxName}
        </Link>
      </li>
    ));
  } else if (isError) {
    content = <p>{error}</p>;
  }

  return (
    <section>
      <h2>{user?.name}</h2>

      <ol>{content}</ol>
      <Link to={"../newBox"}>new box</Link>
    </section>
  );
};
export default Welcome;
