import React from "react";
import { useParams, Route, Routes, useMatch } from "react-router-dom";

import "../assets/css/blog.css";
import ListaCategorias from "../components/ListaCategorias";
import ListaPost from "../components/ListaPost";

const Categoria = () => {
  const { id } = useParams();

  return (
    <>
      <div className="container">
        <h2 className="titulo-pagina">Pet Notícias</h2>
      </div>

      <ListaCategorias />
      <ListaPost url={`/posts?categoria=${id}`} />
    </>
  );
};

export default Categoria;
