import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import GetUserDetails from './components/GetUserDetails/GetUserDetails'
import { login } from './features/userSlice'

function App() {
  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const dispatch = useDispatch()

  const loginUser = (e) => {
    e.preventDefault()
    //user is logged in
    // console.log('name', nameRef.current.value)
    // console.log('email', emailRef.current.value)

    //dispatch the login details to redux store
    let name = nameRef.current.value
    let email = emailRef.current.value


    dispatch(login({
      user_name: name,
      user_email: email
    }))
    nameRef.current.value = null
    emailRef.current.value = null




  }

  return (
    <div className='app'>
      <form>
        <label>Name :</label>
        <input ref={nameRef} type='text' />
        <label>Email :</label>
        <input ref={emailRef} type='email' />
        <button onClick={loginUser} type='submit'>Submit</button>
      </form>
      <GetUserDetails />
    </div>
  )
}

export default App