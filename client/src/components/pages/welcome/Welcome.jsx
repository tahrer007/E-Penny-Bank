import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser, selectCurrentToken } from "features/auth/authSlice";
import { Link } from "react-router-dom";
import { useGetUsersQuery } from "features/users/userSlice";

const Welcome = () => {
  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentToken);
  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetUsersQuery();

  useEffect(() => {

    console.log(users)
  }, [users, isLoading, isSuccess, isError, error]);

  console.log(user);
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
