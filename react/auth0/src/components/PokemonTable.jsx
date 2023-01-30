import React from 'react'
import styled from '@emotion/styled'
import { useContext } from 'react'
import PokemonContext from '../PokemonContext'
import PokemonRow from './PokemonRow'

function PokemonTable() {

    const { filter, pokemon } = useContext(PokemonContext)

    // console.log(pokemon)
    return (
        <table width='100%'>
            <tbody>
                {
                    pokemon?.filter(({ name: { english } }) => english.toLowerCase().includes(filter.toLowerCase())).slice(0, 20).map((pokemon) => (
                        <PokemonRow pokemon={pokemon} />
                    ))
                }


            </tbody>

        </table>
    )
}

export default PokemonTable