
export const getDays = (startDay, endDay) => {

    const day = []

    for (let i = 0; i < startDay; i++) {
        day.push('')
    }
    for (let i = 1; i <= endDay; i++) {
        day.push(i)
    }

    return day
}