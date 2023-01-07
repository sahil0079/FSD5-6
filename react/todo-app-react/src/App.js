import React, { useState } from 'react'
import './App.css'

function App() {

  const [todo, setTodo] = useState('')
  const [todoList, setTodoList] = useState([])

  console.log(todoList)

  const handleChange = (event) => {
    setTodo(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // let newTodoList = [...todoList]

    // newTodoList.push(todo)

    // setTodoList(newTodoList)

    setTodoList((prevTodoList) => [...prevTodoList, todo])
    setTodo("")

  }
  return (
    <div className='app'>
      <div className='app-header'>
        <h1>TO DO</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <label className='todoLabel'>What do you want to do today?</label>
        <br />
        <input onChange={handleChange} value={todo} className='input' type='text' />
        <button type='submit' className='button'>Submit</button>
      </form>

      {todoList.map((todo, index) => (
        <div key={index} className='todo'>
          <input type='checkbox' />
          <h4>{todo}</h4>
          <button>delete</button>
        </div>
      ))}

    </div>
  )
}

export default App