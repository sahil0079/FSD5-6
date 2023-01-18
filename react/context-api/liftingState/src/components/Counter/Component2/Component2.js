import React from 'react'

function Component2({ counter, setCounter }) {
    return (
        <div style={{ width: 500, padding: 40, background: 'aqua' }}>
            <h4>Component 2</h4>
            <button onClick={() => setCounter(counter + 1)} >Increment</button>

        </div>
    )
}

export default Component2