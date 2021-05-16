import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import Calendar from '../../components/Calendar/Calendar'
import {CalendarProvider} from '../../hooks/useCalendar'

const Dashboard = () => {
  return (
    <CalendarProvider>
      <Container maxWidth='lg'>
        <div className='flex'>
          <Card>
            <Calendar />
          </Card>
        </div>
      </Container>
    </CalendarProvider>
  )
}


export default Dashboard
