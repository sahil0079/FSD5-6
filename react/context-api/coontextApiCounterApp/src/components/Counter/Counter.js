import React, { useContext, useState } from 'react'
import { CountContext } from '../../App'
import Component1 from './Component1/Component1'
import Component2 from './Component2/Component2'

function Counter() {
    //lifting the state up

    const { counter } = useContext(CountContext)
    return (
        <div>
            <h1>Counter : {counter} </h1>
            <div>
                <Component1 />
                <Component2 />
            </div>





        </div>
    )
}

export default Counter