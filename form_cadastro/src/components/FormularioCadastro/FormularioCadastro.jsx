import React, { useState, useEffect } from "react";

import { Typography, Stepper, Step, StepLabel } from "@material-ui/core";

// views
import DadosPessoais from "./DadosPessoas";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";

function FormularioCadastro(props) {
  const [dadosColetados, setDados] = useState({});
  const [etapaAtual, setEtapaAtual] = useState(0);
  const { onSubmit, validateCPF } = props;

  const etapas = [
    <DadosUsuario onSubmit={coletarDados} />,
    <DadosPessoais onSubmit={coletarDados} validateCPF={validateCPF} />,
    <DadosEntrega onSubmit={coletarDados} />,
    <Typography variant="h5">Cadastro realizado com sucesso!</Typography>,
  ];

  function coletarDados(dados) {
    setDados({ ...dadosColetados, ...dados });
    avancar();
  }

  function avancar() {
    setEtapaAtual(etapaAtual + 1);
  }

  useEffect(() => {
    if (etapaAtual === etapas.length - 1) {
      onSubmit(dadosColetados);
    }
  });

  return (
    <>
      <Stepper activeStep={etapaAtual}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Pessoal</StepLabel>
        </Step>
        <Step>
          <StepLabel>Entrega</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalização</StepLabel>
        </Step>
      </Stepper>
      {etapas[etapaAtual]}
    </>
  );
}

export default FormularioCadastro;
