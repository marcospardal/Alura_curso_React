import React from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro() {
  return (
    <form>
      <TextField label="Nome" variant="outlined" margin="normal" fullWidth />

      <TextField
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField label="CPF" variant="outlined" margin="normal" fullWidth />

      <FormControlLabel
        label="Promoções"
        control={<Switch label="Promoções" color="primary" defaultChecked />}
      />

      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            label="Novidades"
            margin="normal"
            color="primary"
            defaultChecked
          />
        }
      />

      <Button variant="contained" color="primary" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
