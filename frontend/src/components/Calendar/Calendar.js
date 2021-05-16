import Typography from '../Typography/Typography'
import Week from './Week'
import useCalendar from '../../hooks/useCalendar'
import {getWeeks} from '../../util/calendarFxns'
import './calendar.scss'

const day_labels = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

const Calendar = () => {
  const {month, year} = useCalendar()
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
        {weeks.map(start => (
          <Week
            start={start}
            month={month}
            key={`week-${start.getDate()}`}
          />
        ))}
      </div>
    </div>
  )
}


export default Calendar
