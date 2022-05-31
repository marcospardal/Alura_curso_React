import { createContext, useState, useContext } from "react";

export const CarrinhoContext = createContext();
CarrinhoContext.displayName = 'Carrinho';

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);

  return (
    <CarrinhoContext.Provider value={{ carrinho, setCarrinho }}>
      {children}
    </CarrinhoContext.Provider>
  )
};

export const useCarrinhoContext = () => {
  const { carrinho, setCarrinho } = useContext(CarrinhoContext);

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

  return {
    carrinho,
    setCarrinho,
    adicionarProduto,
    removerProduto
  }
}