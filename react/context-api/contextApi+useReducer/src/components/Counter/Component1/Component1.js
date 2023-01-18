import React, { useContext } from 'react'
import { CountContext } from '../../../App'

function Component1() {

    const { dispatch } = useContext(CountContext)

    return (
        <div style={{ width: 500, padding: 40, background: 'lightgrey' }}>
            <h4>Component 1</h4>
            <button onClick={() => dispatch({ type: 'increment' })} >Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })}
            > Decrement</button>
            <button onClick={() => dispatch({ type: 'reset' })} >Reset</button>
        </div>
    )
}

export default Component1