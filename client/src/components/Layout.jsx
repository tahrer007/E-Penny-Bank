import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "features/auth/authSlice";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const Layout = () => {
  const token = useSelector(selectCurrentToken);

  return token ? (
    <>
    
      <Outlet />
      <Footer/>
    </>
  ) : (
    <Outlet />
  );
};

export default Layout;
