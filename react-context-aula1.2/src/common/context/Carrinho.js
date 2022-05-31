import { createContext, useState, useContext, useEffect } from "react";

export const CarrinhoContext = createContext();
CarrinhoContext.displayName = 'Carrinho';

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);
  const [quantidade, setQuantidade] = useState(0);

  return (
    <CarrinhoContext.Provider value={{ carrinho, setCarrinho, quantidade, setQuantidade }}>
      {children}
    </CarrinhoContext.Provider>
  )
};

export const useCarrinhoContext = () => {
  const { carrinho, setCarrinho, quantidade, setQuantidade } = useContext(CarrinhoContext);

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

  useEffect(() => {
    const novaQuantidade = carrinho.reduce((contador, produto) => contador + produto.quantidade, 0)
    setQuantidade(novaQuantidade)
  }, [carrinho, setQuantidade])

  return {
    carrinho,
    setCarrinho,
    adicionarProduto,
    removerProduto,
    quantidade
  }
}