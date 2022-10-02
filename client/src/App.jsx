import "./app.scss";
import Home from "./components/pages/home/Home";
import Deposit from "./components/pages/deposit/Deposit";
import CreateBox from "./components/pages/createBox/CreateBoxPage";
import BoxDetails from "./components/pages/boxDetails/BoxDetails";
import NavBar from "components/navbar/NavBar";
import LogIn from "./components/pages/login/LogIn";
import SignUp from "./components/pages/signUp/SignUp";
import RequireAuth from "components/pages/requireAuth/RequireAuth";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />
        <Routes>
          {/*unautherized /login / register / unautherized /error  */}
          <Route path="/Login" element={<LogIn />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route element={<RequireAuth />}>
            <Route path="/home" element={<Home />} />
            <Route path="/boxDetails" element={<BoxDetails />} />
            <Route path="/deposit" element={<Deposit />} />
            <Route path="/createBox" element={<CreateBox />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
