import "./app.scss";
import Home from "./components/pages/home/Home";
import Deposit from "./components/pages/deposit/Deposit";
import CreateBox from "./components/pages/createBox/CreateBoxPage";
import BoxDetails from "./components/pages/boxDetails/BoxDetails";
import NavBar from "components/navbar/NavBar";
import LogIn from "./components/pages/login/LogIn";
import SignUp from "./components/pages/signUp/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/boxDetails" element={<BoxDetails />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/createBox" element={<CreateBox />} />
          <Route path="/Login" element={<LogIn />} />
          <Route path="/Signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
