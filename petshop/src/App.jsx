import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/css/base/base.css";

import Home from "./paginas/Home";
import Sobre from "./paginas/Sobre";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </Router>
  );
}

export default App;
