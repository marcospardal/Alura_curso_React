import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";

import ValidacoesCadastros from "./contexts/ValidacoesCadastro";
import { validateCPF, validateSenha } from "./models/cadastro";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" align="center">
        Formulário de cadastro
      </Typography>
      <ValidacoesCadastros.Provider
        value={{ cpf: validateCPF, senha: validateSenha }}
      >
        <FormularioCadastro onSubmit={onSubmit} />
      </ValidacoesCadastros.Provider>
    </Container>
  );
}

function onSubmit(dados) {
  console.log(dados);
}

export default App;
