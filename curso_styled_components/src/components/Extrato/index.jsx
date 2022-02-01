import React from 'react'

import { Box, Botao } from '../UI'
import Items from '../Items';

import { extratoLista } from '../../info'

const Extrato = () => {
  return (
    <Box>
      {extratoLista.updates.map(({ id, type, from, value, date }) => (
        <Items key={id} type={type} from={from} value={value} date={date}/>
      ))}
      <Botao>Ver Mais</Botao>
    </Box>
  )
};

export default Extrato