import { useEffect } from "react";
import { extendedApiSlice } from "features/users/userSlice";
import { useGetBoxesByUserIdQuery } from "features/boxes/boxesSlice";
import { store } from "app/store";
import Spinner from "components/spinner/Spinner";
import Error from "components/error/Error";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
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
  if (isLoading) {
    content = <Spinner />;
  } else if (isSuccess) {
    content = <HomeBody />;
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
      <main className="columnFlex">{content}</main>
    </section>
  );
};
export default Welcome;
