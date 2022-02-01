import React from 'react';

import Cabecalho from './components/Cabecalho';
import Container from './components/Container';

import { GlobalStyle } from './components/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Cabecalho />
      <Container />
    </>
  );
}

export default App;
