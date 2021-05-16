import Typography from '../Typography/Typography'
import useCalendar from '../../hooks/useCalendar'

const Counter = () => {
  const {daysSober} = useCalendar()

  return (
    <div className='checkin'>
      <Typography variant='h2' align='center' gutterBottom>Days Sober</Typography>
      <Typography variant='h2' align='center'>{daysSober}</Typography>
    </div>
  )
}


export default Counter
