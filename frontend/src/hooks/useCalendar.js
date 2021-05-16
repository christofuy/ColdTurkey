import {useState, useEffect, createContext, useContext} from 'react'
import {countDaysSober} from '../util/calendarFxns'
import useAuth from '../utils/useAuth'

const CalendarContext = createContext()

const useCalendar = () => useContext(CalendarContext)

export const CalendarProvider = ({children}) => {
  const {user} = useAuth()
  const [month, setMonth] = useState(new Date().getMonth())
  const [year, setYear] = useState(new Date().getFullYear())
  const [daysSober, setDaysSober] = useState(0)
  const [datesSober, setDatesSober] = useState([])

  useEffect(() => {
    // make request to database here
    const makeRequest = async () => {
      const res = await fetch('http://localhost:5000/api/date', {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json',
          'x-auth-token': user
        },
      })
      const payload = await res.json()
      if (payload.doc) {
        const dates = payload.doc.dates.map(date => new Date(date.date))
        setDatesSober(dates)
        setDaysSober(countDaysSober(dates))
      }
    }
    makeRequest()
  }, [])

  const value = {
    month,
    setMonth,
    year,
    setYear,
    daysSober,
    setDaysSober,
    datesSober,
    setDatesSober
  }

  console.log(value)

  return (
    <CalendarContext.Provider value={value}>
      {children}
    </CalendarContext.Provider>
  )
}


export default useCalendar
