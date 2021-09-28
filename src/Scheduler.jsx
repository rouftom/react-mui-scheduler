import React, {useState, useEffect} from 'react'
import PropTypes from "prop-types"
import { Grid, Paper } from "@mui/material"
import {ThemeProvider} from "@mui/system"
import { useTheme } from '@mui/material/styles'
import {
  format, getDaysInMonth, getDay, sub, startOfMonth, isSameDay, parse
} from 'date-fns'
import SchedulerToolbar from "./Toolbar.jsx"
import MonthModeView from "./MonthModeView.jsx"


/**
 * @name Scheduler
 * @description
 * @param props
 * @constructor
 */
function Scheduler(props) {
  const {
    events, onCellClick, onTaskClick, onEventsChange,
    openAlert, alertMessage, alertProps
  } = props
  const today = new Date()
  const theme = useTheme()
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  
  const [state, setState] = useState({})
  const [searchResult, setSearchResult] = useState()
  const [mode, setMode] = useState('month')
  const [selectedDay, setSelectedDay] = useState(today)
  const [daysInMonth, setDaysInMonth] = useState(getDaysInMonth(today))
  const [selectedDate, setSelectedDate] = useState(format(today, 'MMMM-yyyy'))
  
  /**
   * @name handleDateChange
   * @description
   * @param day
   * @param date
   * @return void
   */
  const handleDateChange = (day, date) => {
    setDaysInMonth(day)
    setSelectedDay(date)
    setSelectedDate(format(date, 'MMMM-yyyy'))
    setState({rows: getRows(), columns: getHeader()})
  }
  
  /**
   * @name handleModeChange
   * @description
   * @param newMode
   * @return void
   */
  const handleModeChange = (newMode) => {
    setMode(newMode)
  }
  
  /**
   * @name onSearchResult
   * @description
   * @param item
   * @return void
   */
  const onSearchResult = (item) => {
    setSearchResult(item)
  }
  
  /**
   * @name getHeader
   * @description
   * @return {{headerClassName: string, headerAlign: string, headerName: string, field: string, flex: number, editable: boolean, id: string, sortable: boolean, align: string}[]}
   */
  const getHeader = () => {
    return weekDays?.map((day, i) => ({
      id: `row-day-header-${i+1}`,
      flex: 1,
      sortable: false,
      editable: false,
      align: 'center',
      headerName: day,
      headerAlign: 'center',
      field: `rowday${i+1}`,
      headerClassName: 'scheduler-theme--header'
    }))
  }
  
  /**
   * @name getRows
   * @description
   * @return {[id: string,  day: number, date: date, data: array]}
   */
  const getRows = () => {
    let rows = [], daysBefore = []
    let iteration = Math.ceil(daysInMonth / 7)
  
    // TODO Rester dans le même mois même si on selectionne
    //  une date du mois précédent mais visible sur le calendrier
    let monthStartDate = startOfMonth(selectedDay)        // Premier jour du mois
    let monthStartDay = getDay(monthStartDate)            // Index du jour de la semaine en chiffre
    let dateDay = parseInt(format(monthStartDate, 'dd'))  // Jour de la date du début du mois en chiffre
  
    // If Mon is the first day of week, apply b < monthStartDay
    // and days: (monthStartDay-b)
    for (let b = 1; b <= monthStartDay; b++) {
      let subDate = sub(monthStartDate, {days: (monthStartDay-b) + 1})
      let day = parseInt(format(subDate, 'dd'))
      let data = events.filter((event) => (
        isSameDay(subDate, parse(event?.date, 'yyyy-MM-dd', new Date()))
      ))
    
      daysBefore.push({
        id: `day_-${day}`,
        day: day,
        date: subDate,
        data: data
      })
    }
    rows.push({ id: 0, days: daysBefore })
  
    for (let i = 0; i < iteration; i++) {
      let obj = []
    
      for (
        let j = 0;
        j < (i === 0 ? 7 - daysBefore?.length : 7) && (dateDay <= daysInMonth);
        j++
      ) {
        let date = parse(`${dateDay}-${selectedDate}`, 'dd-MMMM-yyyy', new Date())
        let data = events.filter((event) => (
          isSameDay(date, parse(event?.date, 'yyyy-MM-dd', new Date()))
        ))
      
        obj.push({ id: `day_${dateDay}`, date: date, day: dateDay, data: data })
        dateDay++
      }
    
      if (i === 0 && daysBefore?.length > 0) {
        rows[0].days = rows[0].days.concat(obj)
        continue
      }
      rows.push({id: i, days: obj})
    }
  
    return rows
  }
  
  useEffect(() => {
    if (daysInMonth) {
      setState({rows: getRows(), columns: getHeader()})
    }
  }, [daysInMonth, selectedDate])
  
  useEffect(() => {
    if (!state?.rows && !state?.columns) {
      setState({rows: getRows(), columns: getHeader()})
    }
  }, [])
  
  return (
    <ThemeProvider theme={theme}>
      <Paper variant="outlined" elevation={0} sx={{p: 0}}>
        <SchedulerToolbar
          today={today}
          events={events}
          openAlert={openAlert}
          alertMessage={alertMessage}
          alertProps={alertProps}
          onDateChange={handleDateChange}
          onModeChange={handleModeChange}
          onSearchResult={onSearchResult}
        />
        <Grid container spacing={0} alignItems="center" justifyContent="center">
          <Grid item xs={12}>
            {mode === 'month' &&
            <MonthModeView
              date={selectedDate}
              rows={state?.rows}
              columns={state?.columns}
              onTaskClick={onTaskClick}
              onCellClick={onCellClick}
              searchResult={searchResult}
              onDateChange={handleDateChange}
              onEventsChange={onEventsChange}
            />}
          </Grid>
        </Grid>
      </Paper>
    </ThemeProvider>
  )
}

Scheduler.propTypes = {
  events: PropTypes.array,
  onCellClick: PropTypes.func,
  onTaskClick: PropTypes.func
}

Scheduler.defaultProps = {

}

export default Scheduler