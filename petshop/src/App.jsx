import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/css/base/base.css";

import Home from "./paginas/Home";
import Sobre from "./paginas/Sobre";
import Post from "./paginas/Post";
import Pagina404 from "./paginas/404";
import Cabecalho from "./components/Cabecalho";
import Categoria from "./paginas/Categoria";

function App() {
  return (
    <Router>
      <Cabecalho />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/categoria/:id" element={<Categoria />} />
        <Route path="*" element={<Pagina404 />} />
      </Routes>
    </Router>
  );
}

export default App;
