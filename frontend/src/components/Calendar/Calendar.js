import Typography from '../Typography/Typography'
import Week from './Week'
import './calendar.scss'

const day_labels = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

const Calendar = ({month, year}) => {
  const weeks = getWeeks(month, year)

  return (
    <div className='calendar'>
      <Typography variant='h2'>Progress</Typography>
      <div className='labels flex'>
        {day_labels.map(day => (
          <Typography variant='body1' color='textPrimary' nonresp key={day}>
            {day}
          </Typography>
        ))}
      </div>
      <div className='calendar__weeks'>
        {weeks.map(week => week)}
      </div>
    </div>
  )
}


const getWeeks = (month, year) => {
  const weeks = []

  const monthStart = new Date(year, month, 1)
  const weekStart = new Date(monthStart)
  weekStart.setDate(monthStart.getDate() - monthStart.getDay())

  do {
    weeks.push(
      <Week
        start={new Date(weekStart)}
        month={month}
        key={`week-${weekStart.getDate()}`}
      />
    )
    weekStart.setDate(weekStart.getDate() + 7)
  } while (weekStart.getMonth() === month)

  return weeks
}


export default Calendar
