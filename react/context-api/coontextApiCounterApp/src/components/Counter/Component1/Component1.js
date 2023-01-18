import React, { useContext } from 'react'
import { CountContext } from '../../../App'

function Component1() {

    const { increment, decrement, reset } = useContext(CountContext)

    return (
        <div style={{ width: 500, padding: 40, background: 'lightgrey' }}>
            <h4>Component 1</h4>
            <button onClick={increment} >Increment</button>
            <button onClick={decrement}
            > Decrement</button>
            <button onClick={reset} >Reset</button>
        </div>
    )
}

export default Component1