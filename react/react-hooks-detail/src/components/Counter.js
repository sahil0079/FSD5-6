import React, { useState } from 'react'

function Counter() {
    const [counter, setCounter] = useState(0)
    console.log(counter)
    function increment() {
        // setCounter(counter + 1) 
        // setCounter(counter + 1)

        setCounter((previousCounter) => previousCounter + 1)
        setCounter((previousCounter) => previousCounter + 1)

    }
    return (
        <div>
            <h1>Counter: {counter} </h1>
            <button onClick={increment}>+</button>
            <button>-</button>

        </div>
    )
}

export default Counter