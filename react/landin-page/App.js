import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import Banner from './components/Banner';
import CardText from './components/CardText';
import Cards from './components/Cards';


function App() {
  return (
    <div className='app'>
      <Navbar />
      <div class="container my-5">
        <Banner />
        <CardText />
        <Cards />
      </div>
    </div>
  )
}

export default App