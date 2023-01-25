import React from 'react'
import './List.css'
import Card from './Card/Card'

function List({ books, getBooks }) {
    return (
        <div className='list'>

            {books.data?.map((book) => {

                return (
                    <div key={book.id}>
                        <Card getBooks={getBooks} {...book} />
                    </div>
                )
            })}

        </div>
    )
}

export default List