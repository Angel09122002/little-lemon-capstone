import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Reservation from "./components/reservation/Reservation";
import Home from "./routes/Home";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservations" element={<Reservation />} />
      </Routes>
    </Router>
  );
}

export default App;
