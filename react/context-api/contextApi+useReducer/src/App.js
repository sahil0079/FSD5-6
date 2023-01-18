import React, { createContext, useReducer, useState } from 'react'
import './App.css'
import Counter from './components/Counter/Counter'
//context api setup

export const CountContext = createContext()

const initialState = 0


//reducer takes state, action as the parameters
const reducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case 'incrementByNum':
      return state + action.payload
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState
    default:
      return state
  }
}


function App() {

  const [counter, dispatch] = useReducer(reducer, initialState)
  // console.log(counter)

  return (
    <CountContext.Provider value={{ counter, dispatch }}>
      <div className='app'>
        <Counter />
      </div>
    </CountContext.Provider>

  )
}

export default App