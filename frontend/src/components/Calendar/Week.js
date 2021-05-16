import CalendarDate from './Date'
import {getDays} from '../../util/calendarFxns'
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
        //marked={datesSober.contains()}
        >
          {date.getDate()}
        </CalendarDate>
      ))}
    </div>
  )
}


export default Week
