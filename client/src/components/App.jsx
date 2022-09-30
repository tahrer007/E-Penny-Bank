import "./app.scss";
import Home from "./pages/home/Home";
import Deposit from "./pages/deposit/Deposit";
import CreateBox from "./pages/createBox/CreateBoxPage";
import BoxDetails from "./pages/boxDetails/BoxDetails";
import NavBar from "components/navbar/NavBar";
import LogIn from "./pages/login/LogIn";
import SignUp from "./pages/signUp/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
<Route path="/" element={<Home />} />;

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/boxDetails" element={<BoxDetails />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/createBox" element={<CreateBox />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
