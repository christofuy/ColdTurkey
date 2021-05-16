import Typography from '../Typography/Typography'
import IconButton from '@material-ui/core/IconButton'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Week from './Week'
import useCalendar from '../../hooks/useCalendar'
import {getWeeks} from '../../util/calendarFxns'
import './calendar.scss'

const day_labels = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
const n_to_month = {
  0: 'Jan',
  1: 'Feb',
  2: 'Mar',
  3: 'Apr',
  4: 'May',
  5: 'Jun',
  6: 'Jul',
  7: 'Aug',
  8: 'Sep',
  9: 'Oct',
  10: 'Nov',
  11: 'Dec'
}

const Calendar = () => {
  const {month, setMonth, year, setYear} = useCalendar()
  const weeks = getWeeks(month, year)

  const changeMonth = (month) => () => {
    if (month < 0) {
      setYear(year - 1)
      month += 12
    } else if (month > 11) {
      setYear(year + 1)
      month %= 12
    }
    setMonth(month)
  }

  return (
    <div className='calendar'>
      <div className='calendar__header flex jc-sb ai-center'>
        <Typography variant='h2'>{n_to_month[month]} {year}</Typography>
        <div className='buttons'>
          <IconButton onClick={changeMonth(month - 1)}>
            <NavigateBeforeIcon />
          </IconButton>
          <IconButton onClick={changeMonth(month + 1)}>
            <NavigateNextIcon />
          </IconButton>
        </div>
      </div>
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
            key={`week-${start}`}
          />
        ))}
      </div>
    </div>
  )
}


export default Calendar
