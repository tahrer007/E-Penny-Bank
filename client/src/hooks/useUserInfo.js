import { useSelector } from "react-redux";
import { selectedCurrentMode } from "features/theme/themeSlice";
import { selectCurrentUser , selectCurrentToken } from "features/auth/authSlice";


const useUserInfo = () => {
    const user = useSelector(selectCurrentUser);
    const token = useSelector(selectCurrentToken);
    const welcomeMsg = user?.lastLogIn
    ? `Welcome back ${user?.name}`
    : `Welcome ${user?.name}`;
  const darkMode = useSelector(selectedCurrentMode);

  const theme = darkMode ? "dark" : "light";

  return [user,welcomeMsg,theme ,token];
};

export default useUserInfo;
