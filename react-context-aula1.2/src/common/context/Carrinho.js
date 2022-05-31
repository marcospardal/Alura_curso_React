import { createContext, useState, useContext, useEffect } from "react";
import { usePagamentoContext } from "./Pagamento";
import { UsuarioContext } from "./Usuario";

export const CarrinhoContext = createContext();
CarrinhoContext.displayName = 'Carrinho';

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);
  const [quantidade, setQuantidade] = useState(0);
  const [valorTotal, setValorTotal] = useState(0);

  return (
    <CarrinhoContext.Provider value={{ carrinho, setCarrinho, quantidade, setQuantidade, valorTotal, setValorTotal }}>
      {children}
    </CarrinhoContext.Provider>
  )
};

export const useCarrinhoContext = () => {
  const { carrinho, setCarrinho, quantidade, setQuantidade, valorTotal, setValorTotal } = useContext(CarrinhoContext);
  const { tipoAtual } = usePagamentoContext();
  const { setSaldo } = useContext(UsuarioContext);

  function mudarQuantidade(id, quantidade) {
    return carrinho.map(item => {
      if (item.id === id) item.quantidade += quantidade
      return item
    })
  }

  function adicionarProduto(novoProduto) {
    const temProduto = carrinho.some(item => item.id === novoProduto.id)
    
    if (!temProduto) {
      novoProduto.quantidade = 1
      return setCarrinho(carrinho => [...carrinho, novoProduto])
    }

    setCarrinho(mudarQuantidade(novoProduto.id, 1))
  }

  function removerProduto(id) {
    const produto = carrinho.find(item => item.id === id);
    const ultimo = produto.quantidade === 1;

    if (ultimo) {
      return setCarrinho(carrinho => carrinho.filter(item => item.id !== id));
    }

    setCarrinho(mudarQuantidade(id, -1))
  }

  function efetuarCompra() {
    setCarrinho([]);
    setSaldo(saldoAtual => saldoAtual - valorTotal);
  }

  useEffect(() => {
    const { total, novaQuantidade } = carrinho.reduce((contador, produto) => 
      ({ novaQuantidade: contador.novaQuantidade + produto.quantidade, total: contador.total + (produto.quantidade * produto.valor) }), 
      { novaQuantidade: 0, total: 0 }
    )
    setQuantidade(novaQuantidade)
    setValorTotal(total * tipoAtual.juros)
  }, [carrinho, setQuantidade, setValorTotal, tipoAtual])

  return {
    carrinho,
    setCarrinho,
    adicionarProduto,
    removerProduto,
    quantidade,
    setQuantidade,
    valorTotal,
    efetuarCompra
  }
}