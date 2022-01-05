import React, { useState, useEffect } from "react";
import {
  useParams,
  Link,
  useMatch,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";

import "../assets/css/blog.css";
import ListaCategorias from "../components/ListaCategorias";
import ListaPost from "../components/ListaPost";
import SubCategoria from "./SubCategoria";
import { busca } from "../api/api";

const Categoria = () => {
  const { id } = useParams();
  const [subCategorias, setSubCategorias] = useState([]);
  const { pathname } = useMatch("/categoria/:id");

  useEffect(() => {
    busca(`/categorias/${id}`, (categoria) => {
      setSubCategorias(categoria.subcategorias);
    });
  }, [id]);

  return (
    <>
      <div className="container">
        <h2 className="titulo-pagina">Pet Notícias</h2>
      </div>

      <ListaCategorias />
      <ul className="lista-categorias container flex">
        {subCategorias.map((subcategoria) => (
          <li
            className={`lista-categorias__categoria lista-categorias__categoria--${id}`}
            key={subcategoria}
          >
            <Link to={`${pathname}/${subcategoria}`}>{subcategoria}</Link>
          </li>
        ))}
      </ul>
      <Routes>
        <Route
          exact
          path={`${pathname}/`}
          element={
            <>
              <ListaPost url={`/posts?categoria=${id}`} />
              <Outlet />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default Categoria;
