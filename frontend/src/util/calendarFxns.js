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

export const compareDates = (d1, dates) => {
  for (let i = 0; i < dates.length; ++i) {
    const d2 = dates[i]
    if (d1.getDate() === d2.getDate()
      && d1.getFullYear() === d2.getFullYear()
      && d1.getMonth() === d2.getMonth()
    ) {
      return true;
    }
  }
  return false;
}

export const countDaysSober = (dates) => {
  let count = 0;
  const curr = new Date()
  for (let i = dates.length - 1; i >= 0; --i) {
    const other = dates[i]
    const diffTime = Math.abs(curr - other);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays < 2) count++;
  }
  return count
}
