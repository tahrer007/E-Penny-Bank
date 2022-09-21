import "./app.scss";
import Home from "./pages/home/Home";
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
