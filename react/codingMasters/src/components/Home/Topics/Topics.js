import React from "react";
import './Topics.css'


export default function Topics() {

    const topics = [
        {
            title: 'Javascript',
            image: 'images/js.jpeg',
            description: `Learn Javascript. The world's most popular language`
        },
        {
            title: 'React',
            image: 'images/react.png',
            description: `Learn React. The world's most popular Javascript library`
        },
        {
            title: 'C++',
            image: 'images/c.png',
            description: `Learn C++.`
        },
        {
            title: 'DSA',
            image: 'images/dsa.png',
            description: `Learn DSA in C++.`
        }
    ]

    return (
        <div>Topics</div>
    )
}

