import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './component/Header/Header'
import Home from './component/Home/Home'

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Header />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/checkout' element={<h1>Checkout Page</h1>} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App