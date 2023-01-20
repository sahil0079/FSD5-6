import React, { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './component/Header/Header'
import Home from './component/Home/Home'
import Checkout from './component/Checkout/Checkout'

function App() {
  const [searchProduct, setSearchProduct] = useState('')
  return (
    <div className='app'>
      <BrowserRouter>
        <Header searchProduct={searchProduct} setSearchProduct={setSearchProduct} />
        <Routes>

          <Route path='/' element={<Home searchProduct={searchProduct} />} />
          <Route path='/checkout' element={<Checkout />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App