export default class ArrayDeNotas {
  constructor() {
    this.notas = [];
  }

  adicionarNota(titulo, nota, categoria) {
    const novaNota = new Nota(titulo, nota, categoria);
    this.notas.push(novaNota);
  }

  apagarNota(indice) {
    this.notas.splice(indice, 1);
  }
}

class Nota {
  constructor(titulo, nota, categoria) {
    this.titulo = titulo;
    this.nota = nota;
    this.categoria = categoria;
  }
}
