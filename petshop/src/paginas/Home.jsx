import React from "react";
import "../assets/css/components/cartao.css";

import ListaCategorias from "../components/ListaCategorias";
import ListaPost from "../components/ListaPost";

const Home = () => {
  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Pet notícias</h2>
      </div>
      <ListaCategorias />
      <ListaPost url={"/posts"} />
    </main>
  );
};

export default Home;
