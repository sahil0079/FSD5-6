
export const selectedYear = new Date().getFullYear()
export const selectedMonth = new Date().getMonth()


//returns total no of days
export const daysInMonth = function (month, year) {

    return new Date(year, month + 1, 0).getDate()
}

//return day for the date

export const monthDays = function (date) {
    return new Date(date).getDay()
}
//0 to 6
