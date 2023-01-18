import React, { useContext } from 'react'
import { CountContext } from '../../../App'

function Component2() {

    const { increment } = useContext(CountContext)
    return (
        <div style={{ width: 500, padding: 40, background: 'aqua' }}>
            <h4>Component 2</h4>
            <button onClick={increment} >Increment</button>

        </div>
    )
}

export default Component2