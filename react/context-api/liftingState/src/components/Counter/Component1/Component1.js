import React from 'react'

function Component1({ counter, setCounter }) {


    return (
        <div style={{ width: 500, padding: 40, background: 'lightgrey' }}>
            <h4>Component 1</h4>
            <button onClick={() => setCounter(counter + 1)} >Increment</button>
            <button onClick={() => setCounter(counter - 1)}
            > Decrement</button>
            <button onClick={() => setCounter(0)} >Reset</button>
        </div>
    )
}

export default Component1