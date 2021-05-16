import CalendarDate from './Date'


const Week = ({start, month}) => {

  const days = getDays(start, month)

  return (
    <div className='calendar__week flex'>
      {days.map(date => date)}
    </div>
  )
}


const getDays = (start, month) => {
  const days = []

  for (let i = 0; i < 7; ++i) {
    const date = new Date(start)
    date.setDate(start.getDate() + i)
    const active = date.getMonth() === month
    days.push(
      <CalendarDate
        key={`day-${i}`}
        active={active}
      >{date.getDate()}</CalendarDate>
    )
  }

  return days
}


export default Week
