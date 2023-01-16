import React, { createContext, useContext } from 'react'

//react context api

//1. create a new context
const UserContext = React.createContext()



function App() {
  //2. use provider component to provide the values
  return (
    <UserContext.Provider value='James Bond'>
      <User />
    </UserContext.Provider>
  )
}
function User() {

  return (
    <div>
      <User1 />
      <User2 />

    </div>
  )

}

function User1() {
  //3. use consi=umer component to extract the value

  const contextValue = useContext(UserContext)
  return (
    // <UserContext.Consumer>
    //   {(value) => <h1>{value} in user 1 </h1>}
    // </UserContext.Consumer>
    <h1>{contextValue} in user 1</h1>

  )
}

function User2() {
  const contextValue = useContext(UserContext)

  return (
    // <UserContext.Consumer>
    //   {(value) => <h3>{value} in user 2 </h3>}
    // </UserContext.Consumer>
    <h3>{contextValue} in user 2</h3>
  )
}
//one way binding

export default App