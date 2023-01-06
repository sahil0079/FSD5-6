import React from 'react'
import useFetchData from './customHooks/useFetchData'

function App() {

  const [users] = useFetchData('https://jsonplaceholder.typicode.com/users')

  const [dogData] = useFetchData('https://dog.ceo/api/breeds/image/random')

  // console.log(dogData)


  //for making a request and fetching a resource
  //it can take more arguments but
  //one mandatory argument path of the resource
  //it returns a promise along with the response of that request
  //we fetch json file across the network 
  //it returns a representation of that response
  //so we extract the json body content from Response object using json()
  // 'https://jsonplaceholder.typicode.com/users'
  // 'https://dog.ceo/api/breeds/image/random'



  return (
    <div>
      <h1>{users[0]?.name} </h1>
      <img src={dogData?.message} />
    </div>
  )
}

export default App