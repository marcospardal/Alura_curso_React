import { BrowserRouter, Switch, Route } from 'react-router-dom';

// telas
import Login from 'pages/Login';
import Feira from 'pages/Feira';
import Carrinho from 'pages/Carrinho';

// contextos
import { UsuarioProvider } from 'common/context/Usuario';
import { CarrinhoProvider } from 'common/context/Carrinho';
import { PagamentoProvider } from 'common/context/Pagamento'

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <UsuarioProvider>
          <Route exact path="/">
            <Login />
          </Route>
          <PagamentoProvider>
            <CarrinhoProvider>
              <Route path="/feira">
                <Feira />
              </Route>
              <Route path='/carrinho'>
                <Carrinho />
              </Route>
            </CarrinhoProvider>
          </PagamentoProvider>
        </UsuarioProvider>
      </Switch>
    </BrowserRouter>
  )
}

export default Router