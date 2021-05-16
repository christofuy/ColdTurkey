import Typography from '../Typography/Typography'
import Button from '../Button/Button'
import useCalendar from '../../hooks/useCalendar'
import './checkin.scss'


const CheckIn = () => {
  // TODO; logic for checking if done already
  // logic for incrementing days sober
  // logic for 
  const {datesSober} = useCalendar()

  return (
    <div className='checkin'>
      <Typography variant='h2' align='center' gutterBottom>Daily Check In</Typography>
      <div className='buttons flex jc-sb'>
        <Button
          variant='contained'
          color='primary'
        //onClick={}
        >
          Label
        </Button>
        <Button
          variant='contained'
          color='secondary'
        >
          Relapse
        </Button>
      </div>
    </div>
  )
}


export default CheckIn
