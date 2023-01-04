import React, { useEffect, useState } from 'react'
import './Counter.css'

function Counter() {
    //top level management
    //under react components

    // const [state, setState] = useState([])
    const [count, setCount] = useState(0)

    //similar to component did mount , empty dependency array
    // useEffect(() => {
    //     console.log('useEffect called')
    // }, [])

    //pass dependency array , similar to componentDidUpdate
    // useEffect(() => {
    //     console.log('useEffect called')
    // }, [count])


    //using a cleanup or a return function, similar to componentWillUnmount

    useEffect(() => {
        console.log('useEffect called')

        return () => {
            console.log('component will unmount is called')
        }
    }, [])









    return (
        <div>
            <h1>Counter : {count} </h1>
            <button onClick={() => setCount(count + 1)} >increment</button>
        </div>
    )
}

export default Counter