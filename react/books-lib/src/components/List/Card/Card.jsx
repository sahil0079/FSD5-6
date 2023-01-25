import React from 'react'
import './Card.css'
import axios from 'axios'
import { url } from '../../../App'

function Card({ id, title, author, genre, summary, getBooks }) {

    const deleteBook = async () => {

        await axios.delete(`${url}/${id}`)
        await getBooks()


    }

    const updateBook = async () => {
        const editData = {
            title: "abc",
            author: "abc",
            genre: "abc",
            summary: "abc"
        }
        await axios.put(`${url}/${id}`, editData)
        await getBooks()

    }
    return (
        <div className='card'>
            <h4 className='card_title'>{title} </h4>
            <div className='card_description'>
                <p>Author: {author} </p>
                <p>Genre: {genre}</p>
            </div>
            <p className='card_summary'>{summary}</p>
            <div className='card_buttons'>
                <button className='button' onClick={updateBook}>Edit</button>
                <button className='button' onClick={deleteBook}>Delete</button>
            </div>
        </div>
    )
}

export default Card