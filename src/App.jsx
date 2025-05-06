import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Coin from "./pages/Coin";
import CoinProvider from "./context/CoinContext";

function App() {
  return (
    <CoinProvider>
      <div className="bg-black text-white">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/coin/:coinId" element={<Coin />} />
          </Routes>
        </Router>
      </div>
    </CoinProvider>
  );
}

export default App;
