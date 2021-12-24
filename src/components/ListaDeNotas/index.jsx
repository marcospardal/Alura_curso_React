import React, { Component } from "react";
import CardNota from "../CardNota";

import "./estilo.css";

class ListaDeNotas extends Component {
  constructor() {
    super();
    this.state = {
      notas: [],
    };
    this._referenciaListaNotas = this._novasNotas.bind(this);
  }

  componentDidMount() {
    this.props.notas.inscrever(this._referenciaListaNotas);
  }

  componentWillUnmount() {
    this.props.notas.desinscrever(this._referenciaListaNotas);
  }

  _novasNotas(notas) {
    this.setState({ ...this.state, notas });
  }

  render() {
    return (
      <ul className="lista-notas">
        {this.state.notas.map((nota, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <CardNota
                apagarNota={this.props.apagarNota}
                titulo={nota.titulo}
                nota={nota.nota}
                index={index}
                categoria={nota.categoria}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
