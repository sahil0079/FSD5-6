import React, { useEffect, useState } from 'react'
import Loading from './components/Loading/Loading'
import Tours from './components/Tours/Tours'


const url = 'https://course-api.com/react-tours-project'

function App() {
  const [tours, setTours] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // fetch(url)
    //   .then(response => response.json())
    //   .then(data => console.log(data))
    fetchTours()
  }, [])

  const filterTour = (id) => {
    const newTours = tours.filter(tour => tour.id !== id)
    setTours(newTours)
  }
  const fetchTours = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const toursData = await response.json()
      setTours(toursData)
      setLoading(false)
    } catch (error) {
      console.log(error)

    }
  }

  if (loading) {
    return <Loading />
  }

  if (tours.length == 0) {
    return (
      <div className='title'>
        <h2>No tours left</h2>
        <button onClick={() => fetchTours()} className='btn'>Refresh Tours </button>
      </div>
    )
  }


  return (
    <div className='main'>
      <Tours tours={tours} filterTour={filterTour} />
    </div>
  )
}

export default App