import React, { useState, useContext } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

import ValidacoesCadastros from "../../contexts/ValidacoesCadastro";

function DadosPessoais(props) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [errors, setErrors] = useState({ cpf: { valido: true, texto: "" } });

  const validacoes = useContext(ValidacoesCadastros);

  const { onSubmit } = props;

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

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (valido()) {
          onSubmit({ nome, sobrenome, cpf, novidades, promocoes });
        }
      }}
    >
      <TextField
        value={nome}
        onChange={(e) => {
          setNome(e.target.value);
        }}
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        value={sobrenome}
        onChange={(e) => setSobrenome(e.target.value)}
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
        label="CPF"
        name="cpf"
        id="cpf"
        error={!errors.cpf.valido}
        helperText={errors.cpf.texto}
        onBlur={validarCampos}
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            checked={promocoes}
            onChange={(e) => setPromocoes(!promocoes)}
            label="Promoções"
            color="primary"
          />
        }
      />

      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            checked={novidades}
            onChange={(e) => setNovidades(!novidades)}
            label="Novidades"
            margin="normal"
            color="primary"
          />
        }
      />

      <Button variant="contained" color="primary" type="submit">
        Próximo
      </Button>
    </form>
  );
}

export default DadosPessoais;
