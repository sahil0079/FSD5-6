import React from 'react'
import './Calendar.css'

function Calendar() {
    return (
        <div className='calendar-container'>
            <div className='calendar-inner-container'>
                <h2>Calendar</h2>
                <div className='calendar-display'>
                    <div className='month-header'>
                        <div className='left-arrow'>{'<'}</div>
                        <div id='month'>Jan, 2022</div>
                        <div className='right-arrow'>{'>'}</div>

                    </div>
                    <div className='calendar-container-child'>
                        <div>Sunday</div>
                        <div>Monday</div>
                        <div>Tuesday</div>
                        <div>Wednesday</div>
                        <div>Thursday</div>
                        <div>Friday</div>
                        <div>Saturday</div>

                    </div>
                    <div className='calendar-container-child'>

                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                        <div>6</div>
                        <div>7</div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calendar