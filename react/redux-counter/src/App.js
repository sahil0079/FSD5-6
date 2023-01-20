import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './actions'

function App() {

  const counter = useSelector((state) => state.counter)
  const isLogged = useSelector((state) => state.isLogged)

  const dispatch = useDispatch()



  return (
    <div>
      <h1>Counter : {counter} </h1>
      <button onClick={() => dispatch(increment(5))}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>

    </div>
  )
}

export default App