import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "features/auth/authSlice";
import Header from "./header/Header";

const Layout = () => {
  const token = useSelector(selectCurrentToken);

  return token ? (
    <>
      <Header />
      <Outlet />
    </>
  ) : (
    <Outlet />
  );
};

export default Layout;
