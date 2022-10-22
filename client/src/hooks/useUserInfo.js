import { useSelector } from "react-redux";
import { selectedCurrentMode } from "features/theme/themeSlice";
import { selectCurrentUser, selectCurrentToken } from "features/auth/authSlice";

import { capitalizeAll } from "utils/helper";

const useUserInfo = () => {
  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentToken);
  let name, welcomeMsg;
  if (user) {
    name = capitalizeAll(user?.name);
    welcomeMsg = user?.lastLogIn ? `Welcome back ${name}` : `Welcome ${name}`;
  }

  const darkMode = useSelector(selectedCurrentMode);

  const theme = darkMode ? "dark" : "light";

  return { user, welcomeMsg, theme, token };
};

export default useUserInfo;
