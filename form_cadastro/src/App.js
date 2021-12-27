import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" align="center">
        Formulário de cadastro
      </Typography>
      <FormularioCadastro onSubmit={onSubmit} validateCPF={validateCPF} />
    </Container>
  );
}

function onSubmit(dados) {
  console.log(dados);
}

function validateCPF(value) {
  if (value.length !== 11) {
    return {
      valido: false,
      texto: "CPF precisa ter 11 dígitos",
    };
  } else {
    return {
      valido: true,
      texto: "",
    };
  }
}

export default App;
