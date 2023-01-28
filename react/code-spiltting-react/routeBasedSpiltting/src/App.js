import React, { lazy, Suspense } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Home from './Home'
// import About from './About'


function App() {

  //Route based code splitting

  const Home = lazy(() => import('./Home'))
  const About = lazy(() => import('./About'))

  return (
    <BrowserRouter>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />

        </Routes>
      </Suspense>

    </BrowserRouter>
  )
}

export default App