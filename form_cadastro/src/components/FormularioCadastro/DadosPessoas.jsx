import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

function DadosPessoais(props) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [errors, setErrors] = useState({ cpf: { valido: true, texto: "" } });

  const { onSubmit, validateCPF } = props;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ nome, sobrenome, cpf, novidades, promocoes });
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
        error={!errors.cpf.valido}
        helperText={errors.cpf.texto}
        onBlur={() => {
          const cpfError = validateCPF(cpf);
          setErrors({ ...errors, cpf: cpfError });
        }}
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
