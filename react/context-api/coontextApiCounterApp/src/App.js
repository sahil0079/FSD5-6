import React, { createContext, useState } from 'react'
import './App.css'
import Counter from './components/Counter/Counter'
//context api setup

export const CountContext = createContext()




function App() {

  const [counter, setCounter] = useState(0)

  const increment = () => {
    setCounter(counter + 1)
  }

  const decrement = () => {
    setCounter(counter - 1)
  }
  const reset = () => {
    setCounter(0)
  }

  return (
    <CountContext.Provider value={{ counter, increment, decrement, reset }}>
      <div className='app'>
        <Counter />
      </div>
    </CountContext.Provider>

  )
}

export default App