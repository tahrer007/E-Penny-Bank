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

  const { state } = useLocation();

  console.log(state);
  //const token = useSelector(selectCurrentToken);

  const { data, error, isLoading } = useGetBoxesByUserIdQuery(
    user._id
  );

  //const Welcome = user ? user.name : "welcome";

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
      <h2>{user.name}</h2>
      <p> teest test </p>
    </section>
  );
};
export default Welcome;
