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
    content = ids.map((id) => (
      <li key={id}>
        <Link to={`/post/${id}`}>{entities[id].boxName}</Link>
      </li>
    ));
  } else if (isError) {
    content = <p>{error}</p>;
  }

  useEffect(() => {
    //console.log(boxesForUser);
    /* const { ids, entities } = boxesForUser;
    if (boxesForUser) {
      ids.forEach((id) => {
        console.log(entities[id].BoxName);
      });
    }*/
  }, []);

  return (
    <section>
      <h2>{user?.name}</h2>

      <ol>{content}</ol>
    </section>
  );
};
export default Welcome;
