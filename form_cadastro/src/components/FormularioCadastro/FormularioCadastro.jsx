import React, { useState } from "react";

// views
import DadosPessoais from "./DadosPessoas";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";

function FormularioCadastro(props) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const { onSubmit, validateCPF } = props;

  const etapas = [
    <DadosUsuario onSubmit={avancar} />,
    <DadosPessoais onSubmit={avancar} validateCPF={validateCPF} />,
    <DadosEntrega onSubmit={onSubmit} />,
  ];

  function avancar() {
    setEtapaAtual(etapaAtual + 1);
  }

  return <>{etapas[etapaAtual]}</>;
}

export default FormularioCadastro;
