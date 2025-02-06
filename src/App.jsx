
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'

import DashboardPage from "./pages/Dashboard";
import Home from "./pages/Home";
import Coin from "./pages/Coin";
import ComparePage from "./pages/ComparePage";
import Watchlist from "./pages/Watchlist";

function App() {


  return (
    <div className="App">
     <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<DashboardPage/>} />
            <Route path="/coin/:id" element={<Coin/>} />
            <Route path="/compare" element={<ComparePage/>} />
            <Route path="/watchlist" element={<Watchlist />} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
