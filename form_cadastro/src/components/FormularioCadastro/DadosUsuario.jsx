import React from "react";
import { TextField, Button } from "@material-ui/core";

function DadosUsuario(props) {
  const { onSubmit } = props;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <TextField
        id="email"
        label="email"
        type="email"
        variant="outlined"
        margin="normal"
        required
        fullWidth
      />
      <TextField
        id="senha"
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
