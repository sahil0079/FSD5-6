import React, { useState } from 'react'
import Component1 from './Component1/Component1'
import Component2 from './Component2/Component2'

function Counter() {
    //lifting the state up
    const [counter, setCounter] = useState(0)
    return (
        <div>
            <h1>Counter : {counter} </h1>
            <div>
                <Component1 counter={counter} setCounter={setCounter} />
                <Component2 counter={counter} setCounter={setCounter} />
            </div>





        </div>
    )
}

export default Counter