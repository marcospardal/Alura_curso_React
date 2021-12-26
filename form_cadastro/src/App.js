import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" align="center">
        Formulário de cadastro
      </Typography>
      <FormularioCadastro />
    </Container>
  );
}

export default App;
