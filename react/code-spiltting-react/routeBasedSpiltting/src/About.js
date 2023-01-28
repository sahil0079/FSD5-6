import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {

    const navigate = useNavigate()

    const goToHome = () => {
        navigate('/')
    }
    return (
        <div>
            <h1>About</h1>
            <button onClick={goToHome}>go to home page</button>
        </div>
    )
}

export default About