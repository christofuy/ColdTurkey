export const getWeeks = (month, year) => {
  const weeks = []

  const monthStart = new Date(year, month, 1)
  const weekStart = new Date(monthStart)
  weekStart.setDate(monthStart.getDate() - monthStart.getDay())

  do {
    weeks.push(new Date(weekStart))
    weekStart.setDate(weekStart.getDate() + 7)
  } while (weekStart.getMonth() === month)

  return weeks
}


export const getDays = (start) => {
  const days = []

  for (let i = 0; i < 7; ++i) {
    const date = new Date(start)
    date.setDate(start.getDate() + i)
    days.push(date)
  }

  return days
}
