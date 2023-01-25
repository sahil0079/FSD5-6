import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import Nav from './components/Nav/Nav'
import List from './components/List/List'
import AddBooks from './components/AddBooks/AddBooks'

export const url = 'http://localhost:3002/books'
function App() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    getBooks()
  }, [])

  const getBooks = async () => {
    const data = await axios.get(url)
    setBooks(data)
  }


  return (
    <div className="app">
      <Nav />
      <div className='app_body'>
        <List getBooks={getBooks} books={books} />
        <AddBooks getBooks={getBooks} />
      </div>
    </div>
  )
}

export default App
