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

function validateSenha(value) {
  if (value.length < 4 || value.length > 72) {
    return {
      valido: false,
      texto: "Senha deve ter entre 4 e 72 dígitos.",
    };
  } else {
    return {
      valido: true,
      texto: "",
    };
  }
}

export { validateCPF, validateSenha };
