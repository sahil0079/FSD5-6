import React from 'react'
import styled from '@emotion/styled'
import { useContext } from 'react'
import PokemonContext from '../PokemonContext'


const Input = styled.input`
  width:100%;
  padding:0.2rem;
  font-size:large;
  border-radius: 5px;
`

function PokemonFilter() {

    const { filter, filterSet } = useContext(PokemonContext)
    // console.log(filter)

    return (
        <Input
            type='text'
            value={filter}
            onChange={(event) => filterSet(event.target.value)}
        />
    )
}

export default PokemonFilter