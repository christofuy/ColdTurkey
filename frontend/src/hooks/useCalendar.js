import {useState, useEffect, createContext, useContext} from 'react'

const CalendarContext = createContext()

const useCalendar = () => useContext(CalendarContext)

export const CalendarProvider = ({children}) => {
  const [month, setMonth] = useState(new Date().getMonth())
  const [year, setYear] = useState(new Date().getFullYear())
  const [daysSober, setDaysSober] = useState(0)
  const [datesSober, setDatesSober] = useState([])

  useEffect(() => {
    // make request to database here
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

  return (
    <CalendarContext.Provider value={value}>
      {children}
    </CalendarContext.Provider>
  )
}


export default useCalendar
