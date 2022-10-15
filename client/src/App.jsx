/*import "./app.scss";
import Welcome from "components/pages/welcome/Welcome";
import Home from "./components/pages/home/Home";
import Deposit from "./components/pages/deposit/Deposit";
import NavBar from "components/navbar/NavBar";
import LogIn from "./components/pages/login/LogIn";
import SignUp from "./components/pages/signUp/SignUp";
import RequireAuth from "components/pages/requireAuth/RequireAuth";
import { BrowserRouter, Routes, Route } from "react-router-dom";*/
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Public from "./components/pages/pubic/Public";
import Login from "./components/pages/login/LogIn";
import RequireAuth from "./features/auth/RequireAuth";
import Welcome from "./components/pages/welcome/Welcome";
import BoxDetails from "./components/pages/boxDetails/BoxDetails";
import CreateBox from "./components/pages/createBox/CreateBoxPage";
import Deposit from "./components/pages/deposit/Deposit";
import AddUser from "components/pages/addUser/AddUser";
import BoxesList from "components/pages/boxesList/List/BoxesList";

//import ThemButton from "components/reusables/themBtn/ThemButton";
import "./style/_main.scss";

//import UsersList from "./features/users/UsersList";

function App() {
  return (
    <div className={`appContainer light`}>
      {/* <ThemButton />*/}
      <div className="background columnFlex">
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* public routes */}
            <Route index element={<Public />} />
            <Route path="login" element={<Login />} />

            {/* protected routes */}
            <Route element={<RequireAuth />}>
              <Route path="newBox" element={<CreateBox />} />
              <Route path="welcome" element={<Welcome />} />
              <Route path="addUser" element={<AddUser />} />
              <Route path="BoxesList" element={<BoxesList />} />

              <Route path="box">
                <Route path=":boxId" element={<BoxDetails />} />
                <Route path="deposit/:boxId" element={<Deposit />} />
                <Route path="new" element={<CreateBox />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
