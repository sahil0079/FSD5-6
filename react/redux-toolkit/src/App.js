import React, { useRef } from 'react'
import './App.css'
import GetUserDetails from './components/GetUserDetails/GetUserDetails'

function App() {
  const nameRef = useRef(null)
  const emailRef = useRef(null)

  const login = (e) => {
    e.preventDefault()
    //user is logged in
    // console.log('name', nameRef.current.value)
    // console.log('email', emailRef.current.value)

    //dispatch the login details to redux store


  }

  return (
    <div className='app'>
      <form>
        <label>Name :</label>
        <input ref={nameRef} type='text' />
        <label>Email :</label>
        <input ref={emailRef} type='email' />
        <button onClick={login} type='submit'>Submit</button>
      </form>
      <GetUserDetails />
    </div>
  )
}

export default App