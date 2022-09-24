import "./app.scss";
import Home from "pages/home/Home";
import Deposit from "pages/deposit/Deposit";
import CreateBox from "pages/createBox/CreateBoxPage";
import NavBar from "components/navbar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
<Route path="/" element={<Home />} />;

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/createBox" element={<CreateBox />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
