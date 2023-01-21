import { CHANGE_MONTH } from "../actions/calendarAction"
import { getDays } from "../utils/calendarUtil"
import { daysInMonth, monthDays, selectedMonth, selectedYear } from "../utils/dateUtil"


const startDay = monthDays(`${selectedMonth + 1}-01-${selectedYear}`)

const endDay = daysInMonth(selectedMonth, selectedYear)



const initialState = {
    startDay,
    endDay,
    selectedMonth,
    selectedYear,
    days: getDays(startDay, endDay)

}

export const reducers = (state = initialState, action) => {

    switch (action.type) {
        case CHANGE_MONTH:
            //logic for changing date
            return state
        default:
            return state
    }
}