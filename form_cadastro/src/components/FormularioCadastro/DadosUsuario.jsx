import React, { useState, useContext } from "react";
import { TextField, Button } from "@material-ui/core";

import ValidacoesCadastros from "../../contexts/ValidacoesCadastro";
import useErrors from "../../hooks/useErrors";

function DadosUsuario(props) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const { onSubmit } = props;

  const validacoes = useContext(ValidacoesCadastros);
  const [errors, validarCampos, valido] = useErrors(validacoes);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (valido()) {
          onSubmit({ email, senha });
        }
      }}
    >
      <TextField
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        id="email"
        label="email"
        type="email"
        variant="outlined"
        margin="normal"
        required
        fullWidth
      />
      <TextField
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        id="senha"
        error={!errors.senha.valido}
        helperText={errors.senha.texto}
        name="senha"
        onBlur={validarCampos}
        label="senha"
        type="password"
        variant="outlined"
        margin="normal"
        required
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}

export default DadosUsuario;
