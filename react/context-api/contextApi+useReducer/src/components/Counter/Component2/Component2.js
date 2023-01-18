import React, { useContext } from 'react'
import { CountContext } from '../../../App'

function Component2() {

    const { dispatch } = useContext(CountContext)
    return (
        <div style={{ width: 500, padding: 40, background: 'aqua' }}>
            <h4>Component 2</h4>
            <button onClick={() => dispatch({ type: 'increment' })} >Increment</button>
            <button onClick={() => dispatch(
                {
                    type: 'incrementByNum',
                    payload: 10

                })} >Increment By Num</button>

        </div>
    )
}

export default Component2