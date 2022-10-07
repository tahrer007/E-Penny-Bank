import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser, selectCurrentToken } from "features/auth/authSlice";
import { Link } from "react-router-dom";
import { extendedApiSlice, selectAllUsers } from "features/users/userSlice";

import { store } from "app/store";

const Welcome = () => {
  store.dispatch(extendedApiSlice.endpoints.getUsers.initiate());
  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentToken);
  
  //fetch users !!
  //fetch user boxes
  //save to store !

  const welcome = user ? `Welcome ${user.name}!` : "Welcome!";

  const content = (
    <section className="welcome">
      <h1>{welcome}</h1>

      <p>
        <Link to="/welcome">Go to the Users List</Link>
      </p>
    </section>
  );

  return content;
};
export default Welcome;
