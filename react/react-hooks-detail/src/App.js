import React, { useEffect, useState } from 'react'
import { unstable_batchedUpdates } from 'react-dom'
import './App.css'
import Counter from './components/Counter'


const getUserData = () => fetch('/user.json').then((response) => response.json())

function App() {

  const [name, setName] = useState()
  const [roles, setRoles] = useState()
  const [roleList, setRoleList] = useState()

  useEffect(() => {
    console.log(`useEffect ${name} ${roles}`)
    if (name) {
      setRoleList(Object.keys(roles).filter(item => roles[item]))
    }

  }, [name, roles])

  const loadUser = async () => {
    const data = await getUserData()

    unstable_batchedUpdates(() => {
      setName(data.name)
      setRoles(data.roles)
    })

  }
  // const loadUser = () => {
  //   setName('user1')
  //   setRoles({
  //     reader: true,
  //   })
  // }
  // console.log('component is rendered')
  return (
    <div className='app'>
      {/* <Counter /> */}
      <h3>{JSON.stringify(name)}</h3>
      <h3>{JSON.stringify(roles)}</h3>
      <h3>{JSON.stringify(roleList)}</h3>
      <button onClick={loadUser}>Load User</button>
    </div>
  )
}

export default App