import React, { useState } from "react";

function useErrors(validacoes) {
  const [errors, setErrors] = useState(criarEstadoInicial(validacoes));

  function validarCampos(event) {
    const novoEstado = { ...errors };
    novoEstado[event.target.name] = validacoes[event.target.name](
      event.target.value
    );
    setErrors(novoEstado);
  }

  function valido() {
    for (let campo in errors) {
      if (!errors[campo].valido) return false;
    }

    return true;
  }

  return [errors, validarCampos, valido];
}

function criarEstadoInicial(validacoes) {
  const estadoInicial = {};

  for (let campo in validacoes) {
    estadoInicial[campo] = { valido: true, texto: "" };
  }

  return estadoInicial;
}

export default useErrors;
