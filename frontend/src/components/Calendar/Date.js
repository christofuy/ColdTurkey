import Typography from '../Typography/Typography'
import './date.scss'


const CalendarDate = ({marked, active, children}) => {

  return (
    <div
      className={`
        calendar__date
        ${marked ? 'calendar__date-marked' : ''}
        ${active ? 'calendar__date-active' : ''}
        flex
        jc-center
        ai-center
      `}
    >
      <Typography
        variant='body1'
        color={active ? 'textPrimary' : 'textSecondary'}
        nonresp
      >
        {children}
      </Typography>
    </div>
  )
}


export default CalendarDate
