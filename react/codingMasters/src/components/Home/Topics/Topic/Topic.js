import React from "react";
import './Topic.css'


export default function Topic({ title, image, description }) {

    return (
        <div className="topic_container">
            <img src={image} alt='codingImage' />
            <h2>{title} </h2>
            <p>{description}</p>
        </div>
    )
}