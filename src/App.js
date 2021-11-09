import React, { Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas';
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeCategorias from './components/ListaDeCategorias';

import './assets/App.css';
import './assets/index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notas: [],
      categorias: []
    }
  }

  criarNota(titulo, texto, categoria) {
    console.log(`Uma nova nota foi criada ${titulo} - ${texto}`)
    const novaNota = { titulo, texto, categoria };
    const novoArrayNotas = [...this.state.notas, novaNota]
    this.setState({ ...this.state, notas: novoArrayNotas })   
  }

  deletarNota(index) {
    let arrayDeNotas = this.state.notas;
    arrayDeNotas.splice(index, 1);
    this.setState({ notas: arrayDeNotas });
  }

  adicionarCategoria(nomeCategoria) {
    const novoArrayCategorias = [...this.state.categorias, nomeCategoria];
    this.setState({ ...this.state, categorias: novoArrayCategorias })
  }

  render() {
    return (
      <section className='conteudo'>
        <FormularioCadastro
          categorias={this.state.categorias}
          criarNota={this.criarNota.bind(this)}
        />
        <main className='conteudo-principal'>
          <ListaDeCategorias
            adicionarCategoria={this.adicionarCategoria.bind(this)}
            categorias={this.state.categorias}
          />
          <ListaDeNotas
            apagarNota={this.deletarNota.bind(this)}
            notas={this.state.notas}
          />
        </main>
      </section>
    );
  }
}

export default App;
