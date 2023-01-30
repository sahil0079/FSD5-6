import React, { useContext } from 'react'
import Button from '@mui/material/Button'
import PokemonContext from '../PokemonContext'

function PokemonRow({ pokemon }) {
    const { selectedPokemonSet } = useContext(PokemonContext)
    return (
        <>
            <tr key={pokemon.id} >
                <td>{pokemon.name.english}</td>
                <td>{pokemon.type.join(', ')} </td>
                <td>
                    <Button
                        variant='contained'
                        color='primary'
                        onClick={() => selectedPokemonSet(pokemon)}

                    >More Info
                    </Button>
                </td>
            </tr>
        </>
    )
}

export default PokemonRow