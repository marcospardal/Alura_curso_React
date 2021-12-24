import React, { Component } from "react";

import "./estilo.css";

class ListaDeCategorias extends Component {
  constructor() {
    super();
    this.state = {
      categorias: [],
    };
    this._referenciaLista = this._novasCategorias.bind(this);
  }

  _handelEventoInput(e) {
    if (e.key === "Enter") {
      const novaCategoria = e.target.value;
      this.props.adicionarCategoria(novaCategoria);
    }
  }

  componentDidMount() {
    this.props.categorias.inscrever(this._referenciaLista);
  }

  componentWillUnmount() {
    this.props.categorias.desinscrever(this._referenciaLista);
  }

  _novasCategorias(categorias) {
    this.setState({ ...this.state, categorias });
  }

  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.state.categorias.map((categoria, index) => (
            <li key={index} className="lista-categorias_item">
              {categoria}
            </li>
          ))}
        </ul>
        <input
          type="text"
          className="lista-categorias_input"
          placeholder="Adicionar categoria"
          onKeyUp={this._handelEventoInput.bind(this)}
        />
      </section>
    );
  }
}

export default ListaDeCategorias;
