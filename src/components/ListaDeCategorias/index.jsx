import React, { Component } from "react";

import "./estilo.css";

class ListaDeCategorias extends Component {
  _handelEventoInput(e) {
    if (e.key === 'Enter') {
      const novaCategoria = e.target.value;
      this.props.adicionarCategoria(novaCategoria);
    }
  }

  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.props.categorias.map((categoria, index) => (
            <li key={index} className="lista-categorias_item">{categoria}</li>
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
