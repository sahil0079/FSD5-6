import React, { useState } from 'react'
import './App.css'


//dont call a component like this {Component()}


function App() {

  const [sendName, setSendName] = useState(false)

  //dont do this
  const NameField = () => {
    const [name, setName] = useState('')

    return (
      <div>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}

        />
      </div>

    )
  }
  return (
    <div className='app'>
      <div>
        <label>
          Send Names
          <input type='checkbox'
            checked={sendName}
            onChange={(e) => setSendName(e.target.checked)}
          />
        </label>
      </div>
      {/* <NameField /> */}
      {/* {sendName && NameField()} */}
      {sendName && React.createElement(NameField, null)}



    </div>
  )
}

export default App