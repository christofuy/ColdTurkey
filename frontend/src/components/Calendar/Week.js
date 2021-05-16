import CalendarDate from './Date'
import {getDays, compareDates} from '../../util/calendarFxns'
import useCalendar from '../../hooks/useCalendar'


const Week = ({start, month}) => {
  const {datesSober} = useCalendar()
  const days = getDays(start)

  return (
    <div className='calendar__week flex'>
      {days.map(date => (
        <CalendarDate
          key={`day-${date.getDay()}`}
          active={date.getMonth() === month}
          marked={compareDates(date, datesSober)}
        >
          {date.getDate()}
        </CalendarDate>
      ))}
    </div>
  )
}

export default Week
