import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Public from "./components/pages/pubic/Public";
import Login from "./components/pages/login/LogIn";
import SignUp from "./components/pages/signUp/SignUp";
import Error from "components/error/Error";

import RequireAuth from "./features/auth/RequireAuth";
import Welcome from "./components/pages/welcome/Welcome";
import BoxDetails from "./components/pages/boxDetails/BoxDetails";
import CreateBox from "./components/pages/createBox/CreateBoxPage";
import Deposit from "./components/pages/deposit/Deposit";
//import AddUser from "components/pages/addUser/AddUser";
import BoxesList from "components/pages/boxesList/List/BoxesList";
import DepositsLogs from "components/pages/dipositsLog/DepositsLogs";
import Profile from "components/pages/profile/Profile";
import JoinBox from "components/pages/join/Join";
import useUserInfo from "hooks/useUserInfo";

//import ThemButton from "components/reusables/themBtn/ThemButton";
import "./style/_main.scss";

//import UsersList from "./features/users/UsersList";

function App() {
  //const darkMode = useSelector(selectedCurrentMode);
  const { theme } = useUserInfo();

  return (
    <div className={`appContainer ${theme}`}>
      {/* <ThemButton />*/}
      <div className="background columnFlex text">
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* public routes */}
            <Route index element={<Public />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />

            <Route path="*" element={<Error />} />

            {/* protected routes */}
            <Route element={<RequireAuth />}>
              <Route path="newBox" element={<CreateBox />} />
              <Route path="welcome" element={<Welcome />} />
              <Route path="profile" element={<Profile />} />
              <Route path="joinBox" element={<JoinBox />} />
              <Route path="BoxesList" element={<BoxesList />} />

              <Route path="box">
                <Route path="new" element={<CreateBox />} />
                <Route path=":boxId" element={<BoxDetails />} />
                <Route path="deposit/:boxId" element={<Deposit />} />
                <Route path="logs/:boxId" element={<DepositsLogs />} />
                
              </Route>
            </Route>
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
