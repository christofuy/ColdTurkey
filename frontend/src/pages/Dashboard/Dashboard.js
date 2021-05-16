import Typography from '../../components/Typography/Typography'
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import Calendar from '../../components/Calendar/Calendar'
import CheckIn from '../../components/CheckIn/CheckIn'
import Counter from '../../components/Counter/Counter'
import {CalendarProvider} from '../../hooks/useCalendar'
import './dashboard.scss'

const Dashboard = () => {
  return (
    <CalendarProvider>
      <div className='dashboard'>
        <Container maxWidth='lg'>
          <Typography variant='h2' gutterBottom>Your Progress</Typography>
          <div className='dashboard__main flex ai-fstart'>
            <Card className='dashboard__component'>
              <Calendar />
            </Card>
            <Card className='dashboard__component'>
              <CheckIn />
            </Card>
            <Card className='dashboard__component'>
              <Counter />
            </Card>
          </div>
        </Container>
      </div>
    </CalendarProvider>
  )
}


export default Dashboard
