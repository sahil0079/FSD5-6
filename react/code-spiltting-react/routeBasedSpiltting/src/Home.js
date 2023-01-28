import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()

    const goToAbout = () => {
        navigate('/about')
    }
    return (
        <div>
            <h1>Homepage</h1>
            <button onClick={goToAbout} >go to about page</button>
        </div>
    )
}

export default Home