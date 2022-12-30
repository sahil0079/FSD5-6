import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'


function App() {
  return (
    <div className='app'>
      <Navbar />
      <Home />
      {/* <Footer /> */}
    </div>


  )
}

export default App