import React, { useEffect, useState } from 'react'
import './App.css'
import styled from '@emotion/styled'
import PokemonFilter from './components/PokemonFilter'
import PokemonContext from './PokemonContext'
import PokemonTable from './components/PokemonTable'
import PokemonInfo from './components/PokemonInfo'
import { useAuth0 } from '@auth0/auth0-react'
import { Button } from '@mui/material'


const Title = styled.h1`
  text-align: center
`
const PageContainer = styled.div`
  margin: auto;
  width: 800px;
  padding-top:1rem;
`

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  grid-column-gap: 1rem;
`

const ButtonContainerTwo = styled.div`
  display:flex;
  justify-content: space-around;
  margin:auto;
  width:400px;
  padding: 4rem;
`

const ButtonContainer = styled.div`
  margin:auto;
  width:40px;
  padding-top:20em;
`

function App() {
  const [filter, filterSet] = useState("")
  const [pokemon, pokemonSet] = useState(null)
  const [selectedPokemon, selectedPokemonSet] = useState(null)

  const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0()

  // console.log(user)
  // console.log(selectedPokemon)

  const getPokemons = async () => {
    try {
      const resp = await fetch('pokemon.json')
      if (resp.statusText === 'OK') {
        pokemonSet((await resp.json()).pokemon)
      }
    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    getPokemons()
  }, [])

  return (
    <PokemonContext.Provider value={{
      filter,
      filterSet,
      pokemon,
      pokemonSet,
      selectedPokemon,
      selectedPokemonSet
    }} >
      <div className='app'>

        {
          isAuthenticated ? (
            <ButtonContainerTwo>
              <Title>Hi {user?.name}</Title>
              <Button
                variant='contained'
                color='primary'
                onClick={() => logout({
                  returnTo: window.location.origin
                })}
              >
                Logout
              </Button>
            </ButtonContainerTwo>
          ) : (
            <ButtonContainer>
              <Button
                variant='contained'
                color='primary'
                onClick={() => loginWithRedirect()}
              >
                Login
              </Button>
            </ButtonContainer>
          )
        }

        {
          isAuthenticated && (
            <PageContainer>
              <Title>Pokemon Search</Title>
              <TwoColumnLayout>
                <div>
                  <PokemonFilter />
                  <PokemonTable />
                </div>
                <PokemonInfo />
              </TwoColumnLayout>
            </PageContainer>
          )
        }

      </div>
    </PokemonContext.Provider>
  )
}

export default App