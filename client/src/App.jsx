/*import "./app.scss";
import Welcome from "components/pages/welcome/Welcome";
import Home from "./components/pages/home/Home";
import Deposit from "./components/pages/deposit/Deposit";
import CreateBox from "./components/pages/createBox/CreateBoxPage";
import BoxDetails from "./components/pages/boxDetails/BoxDetails";
import NavBar from "components/navbar/NavBar";
import LogIn from "./components/pages/login/LogIn";
import SignUp from "./components/pages/signUp/SignUp";
import RequireAuth from "components/pages/requireAuth/RequireAuth";
import { BrowserRouter, Routes, Route } from "react-router-dom";*/

import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Public from "./components/Public";
import Login from "./components/pages/login/LogIn";
import Welcome from "./components/pages/welcome/Welcome";
import RequireAuth from "./features/auth/RequireAuth";
//import UsersList from "./features/users/UsersList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />

        {/* protected routes */}
        <Route element={<RequireAuth />}>
          <Route path="welcome" element={<Welcome />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
