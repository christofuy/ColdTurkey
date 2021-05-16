import Container from '@material-ui/core/Container'
import Calendar from '../../components/Calendar/Calendar'

const Dashboard = () => {
  return (
    <Container maxWidth='lg'>
      <Calendar month={4} year={2021} />
    </Container>
  )
}


export default Dashboard
