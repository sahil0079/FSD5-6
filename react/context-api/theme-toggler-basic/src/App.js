import React, { useContext } from 'react'
import './App.css'
import { ThemeContext } from './context/ThemeProvider'



function App() {

  const { toggle, toggleFunction } = useContext(ThemeContext)
  console.log(toggle)



  return (
    <div className='app' style={{ backgroundColor: toggle ? 'tomato' : 'white' }} >

      <h1>Context Api</h1>
      <button onClick={toggleFunction} >Change the theme</button>

    </div>
  )
}

export default App