import React, { Component } from "react";
import deleteIcon from "../../assets/img/delete.svg";

import "./estilo.css";

class CardNota extends Component {
  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
          <img
            alt="delete-icon"
            src={deleteIcon}
            style={{ height: 15, cursor: "pointer" }}
            onClick={() => this.props.apagarNota(this.props.index)}
          />
        </header>
        <h4>{this.props.categoria}</h4>
        <p className="card-nota_texto">{this.props.nota}</p>
      </section>
    );
  }
}

export default CardNota;
