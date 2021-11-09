import React, { Component } from 'react';
import deleteIcon from '../../assets/img/delete.svg';

import './estilo.css';

class CardNota extends Component {
  render() {
    return (
      <section className='card-nota'>
        <header className='card-nota_cabecalho'>
          <h3 className='card-nota_titulo'>{this.props.titulo}</h3>
          <img 
            src={deleteIcon} 
            style={{ height: 15, cursor: 'pointer' }}
            onClick={() => this.props.apagarNota(this.props.index)}
          />
          <h4>{this.props.categoria}</h4>
        </header>
        <p className='card-nota_texto'>{this.props.texto}</p>
      </section>
    )
  }
}

export default CardNota;