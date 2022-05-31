import { createContext, useState, useContext } from "react";

export const PagamentoContext = createContext();

export const PagamentoProvider = ({ children }) => {
  const tiposPagamento = [
    {
      nome: 'Boleto',
      juros: 1,
      id: 1
    },
    {
      nome: 'Cartão de Crédito',
      juros: 1.3,
      id: 2
    },
    {
      nome: 'Pix',
      juros: 1,
      id: 3
    },
    {
      nome: 'Crediário',
      juros: 1.5,
      id: 4
    }
  ]
  const [tipoAtual, setTipoAtual] = useState(tiposPagamento[0]);

  return (
    <PagamentoContext.Provider value={{ tiposPagamento, tipoAtual, setTipoAtual }}>
      {children}
    </PagamentoContext.Provider>
  )
}

export const usePagamentoContext = () => {
  const { tiposPagamento, tipoAtual, setTipoAtual } = useContext(PagamentoContext)

  function mudarTipoAtual(id) {
    setTipoAtual(tiposPagamento.find(tipo => tipo.id === id))
  }

  return {
    tiposPagamento,
    tipoAtual,
    mudarTipoAtual
  }
}