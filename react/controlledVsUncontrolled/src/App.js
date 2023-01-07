import React from 'react'
import './App.css'
import NameFormUncontrolled from './components/NameFormUncontrolled'
import NameFormControlled from './components/NameFormControlled'

function App() {
  return (
    <div className='app'>
      {/* <NameFormUncontrolled /> */}
      <NameFormControlled />
    </div>
  )
}

export default App