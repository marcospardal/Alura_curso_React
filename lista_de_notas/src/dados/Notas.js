export default class ArrayDeNotas {
  constructor() {
    this.notas = [];
    this._inscritos = [];
  }

  inscrever(func) {
    this._inscritos.push(func);
  }

  desinscrever(func) {
    this._inscritos = this._inscritos.filter((inscrito) => func !== inscrito);
  }

  notificar() {
    this._inscritos.forEach((func) => func(this.notas));
  }

  adicionarNota(titulo, nota, categoria) {
    const novaNota = new Nota(titulo, nota, categoria);
    this.notas.push(novaNota);
    this.notificar();
  }

  apagarNota(indice) {
    this.notas.splice(indice, 1);
    this.notificar();
  }
}

class Nota {
  constructor(titulo, nota, categoria) {
    this.titulo = titulo;
    this.nota = nota;
    this.categoria = categoria;
  }
}
