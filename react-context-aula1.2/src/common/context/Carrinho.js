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

  function adicionarProduto(novoProduto) {
    const temProduto = carrinho.some(item => item.id === novoProduto.id)
    
    if (!temProduto) {
      novoProduto.quantidade = 1
      return setCarrinho(carrinho => [...carrinho, novoProduto])
    }

    setCarrinho(carrinho => carrinho.map(item => {
      if (item.id === novoProduto.id) item.quantidade += 1
      return item
    }))
  }

  return {
    carrinho,
    setCarrinho,
    adicionarProduto
  }
}