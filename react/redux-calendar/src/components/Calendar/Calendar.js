import React from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { CHANGE_MONTH } from '../../actions/calendarAction'
import { MONTH_LIST } from '../../constants/calendar'
import './Calendar.css'

// function Calendar(props) {

//     console.log('props', props)

//     // const state = useSelector((state) => state)
//     // console.log('state', state)

//     const changeMonth = (arrow) => {

//         let selectedYear
//         let selectedMonth

//         if (arrow === 'LEFT') {

//             if (props.selectedMonth === 0) {
//                 selectedMonth = 11
//                 selectedYear = props.selectedYear - 1
//             } else {
//                 selectedMonth = props.selectedMonth - 1
//                 selectedYear = props.selectedYear
//             }
//         } else if (arrow === 'RIGHT') {

//             if (props.selectedMonth === 11) {
//                 selectedMonth = 0
//                 selectedYear = props.selectedYear + 1
//             } else {
//                 selectedMonth = props.selectedMonth + 1
//                 selectedYear = props.selectedYear
//             }
//         } else {
//             selectedMonth = props.selectedMonth + 1
//             selectedYear = props.selectedYear
//         }

//         props.dispatch({
//             type: CHANGE_MONTH,
//             payload: {
//                 selectedYear,
//                 selectedMonth
//             }
//         })


//     }

//     return (
//         <div className='calendar-container'>
//             <div className='calendar-inner-container'>
//                 <h2>Calendar</h2>
//                 <div className='calendar-display'>
//                     <div className='month-header'>
//                         <div
//                             className='left-arrow'
//                             onClick={() => changeMonth('LEFT')}
//                         >{'<'}</div>
//                         <div id='month'>{MONTH_LIST[props.selectedMonth
//                         ]}, {props.selectedYear}</div>
//                         <div
//                             className='right-arrow'
//                             onClick={() => changeMonth('RIGHT')}
//                         >{'>'}</div>

//                     </div>
//                     <div className='calendar-container-child'>
//                         <div>Sunday</div>
//                         <div>Monday</div>
//                         <div>Tuesday</div>
//                         <div>Wednesday</div>
//                         <div>Thursday</div>
//                         <div>Friday</div>
//                         <div>Saturday</div>

//                     </div>
//                     <div className='calendar-container-child'>

//                         {props.days.map((day, index) => {

//                             return (
//                                 <div key={`${index}${day}`}> {day} </div>
//                             )
//                         })}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// const mapStateToProps = (state) => {
//     return {
//         startDay: state.startDay,
//         endDay: state.endDay,
//         selectedMonth: state.selectedMonth,
//         selectedYear: state.selectedYear,
//         days: state.days

//     }
// }

// export default connect(mapStateToProps)(Calendar)
function Calendar() {


    const state = useSelector((state) => state)
    const dispatch = useDispatch()
    console.log('state', state)

    const changeMonth = (arrow) => {

        let selectedYear
        let selectedMonth

        if (arrow === 'LEFT') {

            if (state.selectedMonth === 0) {
                selectedMonth = 11
                selectedYear = state.selectedYear - 1
            } else {
                selectedMonth = state.selectedMonth - 1
                selectedYear = state.selectedYear
            }
        } else if (arrow === 'RIGHT') {

            if (state.selectedMonth === 11) {
                selectedMonth = 0
                selectedYear = state.selectedYear + 1
            } else {
                selectedMonth = state.selectedMonth + 1
                selectedYear = state.selectedYear
            }
        } else {
            selectedMonth = state.selectedMonth + 1
            selectedYear = state.selectedYear
        }

        dispatch({
            type: CHANGE_MONTH,
            payload: {
                selectedYear,
                selectedMonth
            }
        })


    }

    return (
        <div className='calendar-container'>
            <div className='calendar-inner-container'>
                <h2>Calendar</h2>
                <div className='calendar-display'>
                    <div className='month-header'>
                        <div
                            className='left-arrow'
                            onClick={() => changeMonth('LEFT')}
                        >{'<'}</div>
                        <div id='month'>{MONTH_LIST[state.selectedMonth
                        ]}, {state.selectedYear}</div>
                        <div
                            className='right-arrow'
                            onClick={() => changeMonth('RIGHT')}
                        >{'>'}</div>

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

                        {state.days.map((day, index) => {

                            return (
                                <div key={`${index}${day}`}> {day} </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Calendar
