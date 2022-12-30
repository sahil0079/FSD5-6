import React from 'react'
import './App.css'
import CreateBurger from './CreateBurger'
import { BurgerComponentEnum } from './Resources'


function App() {
  return (
    <div className='app'>

      <CreateBurger
        burgerStack={[
          BurgerComponentEnum.LETTUCE,
          BurgerComponentEnum.TOMATOES,
          BurgerComponentEnum.CHEESE,
          BurgerComponentEnum.LETTUCE,
          BurgerComponentEnum.TOMATOES,
          BurgerComponentEnum.TOMATOES,
        ]}
      />


      {/* <BreadUpper/>
      <BreadLower/>
      <Cheese/>
      <Lettuce/>
      <Tomatoes/> */}
    </div>


  )
}

export default App