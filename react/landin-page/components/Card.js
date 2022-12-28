import React from 'react'

function Card({ title, description }) {
    return (
        <div class="card">
            <img src="https://picsum.photos/300/200" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">{description}.</p>
                <button type="button" class="btn btn-danger">
                    Read More
                </button>
            </div>
        </div>
    )
}

export default Card