import React from 'react'
import Tour from './Tour/Tour'

function Tours({ tours, filterTour }) {
    return (
        <div className='section'>
            <div className='title'>
                <h2>Available Tours</h2>
                <div className='underline'></div>
            </div>
            {tours.map((tour) => {
                return <Tour key={tour.id} {...tour} filterTour={filterTour} />
            })}
        </div>
    )
}

export default Tours