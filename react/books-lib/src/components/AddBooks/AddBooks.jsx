import React, { useReducer, useState } from 'react'
import './AddBooks.css'
import axios from 'axios'
import { url } from '../../App'


function AddBooks({ getBooks }) {
    // const [title, setTitle] = useState('')
    // const [author, setAuthor] = useState('')
    // const [genre, setGenre] = useState('')
    // const [summary, setSummary] = useState('')

    const [state, setState] = useState({
        title: "",
        author: "",
        genre: "",
        summary: ""
    })
    console.log('state', state)

    // const [state, dispatch] = useReducer(reducer, initialState)

    const handleInputChange = (e) => {

        // console.log(e.target.name)
        if (e.target.name == 'title') setState((prevState) => ({ ...prevState, title: e.target.value }))
        else if (e.target.name == 'author') setState((prevState) => ({ ...prevState, author: e.target.value }))
        else if (e.target.name == 'genre') setState((prevState) => ({ ...prevState, genre: e.target.value }))
        else if (e.target.name == 'summary') setState((prevState) => ({ ...prevState, summary: e.target.value }))
    }

    const addBook = async (e) => {
        e.preventDefault()
        const formJSON = structuredClone({ ...state })
        await axios.post(url, formJSON)
        await getBooks()
        setState({
            title: "",
            author: "",
            genre: "",
            summary: ""
        })

    }


    return (
        <div className='addBooks'>
            <h2>Add Book</h2>
            <form>
                <label className='addBooks_label'>Title:</label>
                <input
                    className='addBooks_input'
                    type='text'
                    name='title'
                    value={state.title}
                    onChange={handleInputChange}
                />
                <label className='addBooks_label'>Author:</label>
                <input
                    className='addBooks_input'
                    type='text'
                    name='author'
                    value={state.author}
                    onChange={handleInputChange}
                />
                <label className='addBooks_label'>Genre:</label>
                <input
                    className='addBooks_input'
                    type='text'
                    name='genre'
                    value={state.genre}
                    onChange={handleInputChange}
                />
                <label className='addBooks_label'>Summary:</label>
                <input
                    className='addBooks_input'
                    type='text'
                    name='summary'
                    value={state.summary}
                    onChange={handleInputChange}
                />
                <button
                    className='addBooks_button'
                    type='submit'
                    onClick={addBook}
                >Add</button>
            </form>
        </div>
    )
}

export default AddBooks