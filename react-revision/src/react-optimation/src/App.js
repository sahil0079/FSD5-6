import React, { useCallback, useMemo, useState } from 'react'
import './App.css'

function Square({ parameter }) {
  console.log(`Square is rendered ${parameter.color}`)
  return (
    <div style={{ width: 100, height: 100, backgroundColor: parameter.color }}></div>
  )
}

const MemoizedSquare = React.memo(Square)

function App() {
  const [appRenderCount, setAppRenderCount] = useState(0)
  const [color, setColor] = useState('tomato')

  console.log(`App is rendered ${appRenderCount}`)

  const params = useMemo(() => ({ color }), [color])
  const addSum = useCallback(() => { }, [])
  return (
    <div className='app'>
      <div>
        <button onClick={() => setAppRenderCount(appRenderCount + 1)} >Re Render  App</button>
        <button onClick={() => setColor(color === 'tomato' ? 'green' : 'tomato')}>Change Color</button>
      </div>
      <div>
        <MemoizedSquare parameter={params} addSum={addSum} />
      </div>

    </div>
  )
}

export default App