import React from "react";
import "../assets/css/components/cartao.css";

const Home = () => {
  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Pet notícias</h2>
        <section className="container flex flex--centro">
          <article className="cartao post">
            <h2 className="cartao__titulo">Banho no cão</h2>
            <p className="cartao__texto">
              A maioria dos cães preferem pular a hora do banho, ...
            </p>
          </article>
        </section>
      </div>
    </main>
  );
};

export default Home;
