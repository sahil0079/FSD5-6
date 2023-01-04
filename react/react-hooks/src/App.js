import React, { useState } from 'react'
import './App.css'
import Counter from './Counter'

function App() {

  const [showCounter, setShowCounter] = useState(false)

  return (
    <div className='app'>
      {showCounter && <Counter />}

      <button onClick={() => setShowCounter(true)} >Mount</button>
      <button onClick={() => setShowCounter(false)}>Unmount</button>
    </div>
  )
}

export default App