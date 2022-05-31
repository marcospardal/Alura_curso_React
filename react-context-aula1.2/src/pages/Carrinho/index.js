import { Button, Snackbar, InputLabel, Select, MenuItem } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { useState, useContext, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Voltar, TotalContainer, PagamentoContainer } from './styles';
import Produto from 'components/Produto';
import { useCarrinhoContext } from '../../common/context/Carrinho';
import { usePagamentoContext } from '../../common/context/Pagamento';
import { UsuarioContext } from '../../common/context/Usuario';

function Carrinho() {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const { carrinho, valorTotal, efetuarCompra } = useCarrinhoContext();
  const { saldo = 0 } = useContext(UsuarioContext)
  const { tipoAtual, tiposPagamento, mudarTipoAtual } = usePagamentoContext();
  const total = useMemo(() => saldo - valorTotal, [saldo, valorTotal])
  const history = useHistory();

  return (
    <Container>
      <Voltar onClick={() => history.goBack()}/>
      <h2>
        Carrinho
      </h2>
      {carrinho.map(produto => (
        <Produto 
          {...produto}
          key={produto.id}
        />
      ))}
      <PagamentoContainer>
        <InputLabel> Forma de Pagamento </InputLabel>
        <Select 
          value={tipoAtual.id}
          onChange={(e) => mudarTipoAtual(e.target.value)}
        >
          {tiposPagamento.map(pagamento => (
            <MenuItem value={pagamento.id} key={pagamento.id}>
              {pagamento.nome}
            </MenuItem>
          ))}
        </Select>
      </PagamentoContainer>
      <TotalContainer>
          <div>
            <h2>Total no Carrinho: </h2>
            <span>R$ {valorTotal.toFixed(2)}</span>
          </div>
          <div>
            <h2> Saldo: </h2>
            <span> R$ {Number(saldo).toFixed(2)}</span>
          </div>
          <div>
            <h2> Saldo Total: </h2>
            <span> R$ {(total.toFixed(2))}</span>
          </div>
        </TotalContainer>
      <Button
        onClick={() => {
          efetuarCompra()
          setOpenSnackbar(true);
        }}
        color="primary"
        variant="contained"
        disabled={total < 0 || valorTotal === 0}
      >
         Comprar
       </Button>
        <Snackbar
          anchorOrigin={
            { 
              vertical: 'top',
              horizontal: 'right'
            }
          }
          open={openSnackbar}
          onClose={() => setOpenSnackbar(false)}
        >
           <MuiAlert
            onClose={() => setOpenSnackbar(false)}
            severity="success"
          >
            Compra feita com sucesso!
          </MuiAlert>
        </Snackbar>
    </Container>
  )
}

export default Carrinho;