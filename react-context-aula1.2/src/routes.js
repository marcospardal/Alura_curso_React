import { BrowserRouter, Switch, Route } from 'react-router-dom';

// telas
import Login from 'pages/Login';
import Feira from 'pages/Feira';
import Carrinho from 'pages/Carrinho';

// contextos
import { UsuarioProvider } from 'common/context/Usuario';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <UsuarioProvider>
          <Login />
          </UsuarioProvider>
        </Route>
        <Route path="/feira">
          <Feira />
        </Route>
        <Route path='/carrinho'>
          <Carrinho />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router