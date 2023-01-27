import React, { useCallback, useEffect, useState } from 'react'
import './App.css'


let timerId = 0

const Timer = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    timerId++
    const timer = setInterval(() => {
      setCount((prevCount) => {
        console.log(`Timer ${timerId} starts ${prevCount} `)

        return prevCount + 1
      })
    }, 1000)


    return () => {
      console.log('Cleared the previous comp timer')
      clearInterval(timer)
    }



  }, [])
  return <h1>Timer: {count}</h1>

}


function App() {
  const [index, setIndex] = useState(0)
  const updateIndex = useCallback(() => setIndex(index + 1), [index])

  return (
    <div className='app'>
      <Timer key={index} />
      <div>
        <button onClick={updateIndex}>Update Index</button>
      </div>
    </div>
  )
}

export default App