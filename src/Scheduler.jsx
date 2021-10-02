import React, {useState, useEffect} from 'react'
import PropTypes from "prop-types"
import { Grid, Paper, Fade, Zoom } from "@mui/material"
import {ThemeProvider} from "@mui/system"
import { useTheme } from '@mui/material/styles'
import {
  format, getDaysInMonth, getDay, sub, startOfMonth, parse,
  add, startOfDay, startOfWeek, getWeeksInMonth, isSameDay
} from 'date-fns'
import SchedulerToolbar from "./Toolbar.jsx"
import MonthModeView from "./MonthModeView.jsx"
import WeekModeView from "./WeekModeView.jsx"
import DayModeView from "./DayModeView.jsx"
import TimeLineModeView from "./TimeLineModeView.jsx"


/**
 * @name Scheduler
 * @description
 * @param props
 * @constructor
 */
function Scheduler(props) {
  const {
    events,
    options,
    onCellClick,
    onTaskClick,
    onEventsChange,
    alertProps,
    onAlertCloseButtonClicked,
    toolbarProps
  } = props
  const today = new Date()
  const theme = useTheme()
  const TransitionMode = options?.transitionMode === 'zoom' ? Zoom : Fade
  
  const [state, setState] = useState({})
  const [alrtProps, setAlrtProps] = useState(alertProps)
  const [searchResult, setSearchResult] = useState()
  const [mode, setMode] = useState(options?.defaultMode || 'month')
  const [selectedDay, setSelectedDay] = useState(today)
  const [daysInMonth, setDaysInMonth] = useState(getDaysInMonth(today))
  const [selectedDate, setSelectedDate] = useState(format(today, 'MMMM-yyyy'))
  
  /**
   * @name getMonthHeader
   * @description
   * @return {{headerClassName: string, headerAlign: string, headerName: string, field: string, flex: number, editable: boolean, id: string, sortable: boolean, align: string}[]}
   */
  const getMonthHeader = () => {
    let weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    if (options?.startWeekOn?.toUpperCase() === 'SUN') {
      weekDays[0] = 'Sun'
      weekDays[6] = 'Mon'
    }
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
   * @name getMonthRows
   * @description
   * @return {[id: string,  day: number, date: date, data: array]}
   */
  const getMonthRows = () => {
    let rows = [], daysBefore = []
    let iteration = getWeeksInMonth(selectedDay) //Math.ceil(daysInMonth / 7)
    let startOnSunday = options?.startWeekOn?.toUpperCase() === 'SUN'
    let monthStartDate = startOfMonth(selectedDay)        // First day of month
    let monthStartDay = getDay(monthStartDate)            // Index of the day in week
    let dateDay = parseInt(format(monthStartDate, 'dd'))  // Month start day
    // Condition check helper
    const checkCondition = (v) => (startOnSunday ? v <= monthStartDay : v < monthStartDay)
    
    if (monthStartDay > 1) {
      // Add days of precedent month
      // If Sunday is the first day of week, apply b <= monthStartDay
      // and days: (monthStartDay-b) + 1
      for (let i = 1; checkCondition(i); i++) {
        let subDate = sub(
          monthStartDate,
          {days: monthStartDay - i + (startOnSunday ? 1 : 0)}
        )
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
    }
  
    if (daysBefore?.length > 0) {
      rows.push({ id: 0, days: daysBefore })
    }
    
    // Add days and events data
    for (let i = 0; i < iteration; i++) {
      let obj = []
      
      for (
        let j = 0;
        // This condition ensure that days will not exceed 30
        // i === 0 ? 7 - daysBefore?.length means that we substract inserted days
        // in the first line to 7
        j < (i === 0 ? 7 - daysBefore?.length : 7) && (dateDay <= daysInMonth);
        j++
      ) {
        let date = parse(`${dateDay}-${selectedDate}`, 'dd-MMMM-yyyy', new Date())
        let data = events.filter((event) => (
          isSameDay(date, parse(event?.date, 'yyyy-MM-dd', new Date()))
        ))
        
        obj.push({ id: `day_-${dateDay}`, date: date, day: dateDay, data: data })
        dateDay++
      }
      
      if (i === 0 && daysBefore?.length > 0) {
        rows[0].days = rows[0].days.concat(obj)
        continue
      }
      if (obj.length > 0) {
        rows.push({id: i, days: obj})
      }
    }
    
    // Check if last row is not fully filled
    let lastRow = rows[iteration - 1]
    let lastRowDaysdiff = 7 - lastRow?.days?.length
    let lastDaysData = []
    
    if (lastRowDaysdiff > 0) {
      let day = lastRow.days[lastRow?.days?.length-1]
      let addDate = day.date
      
      for (let i = dateDay; i < (dateDay + lastRowDaysdiff); i++) {
        addDate = add(addDate, {days: 1})
        let d = format(addDate, 'dd')
        // eslint-disable-next-line
        let data = events.filter((event) => (
          isSameDay(addDate, parse(event?.date, 'yyyy-MM-dd', new Date()))
        ))
        lastDaysData.push({ id: `day_-${d}`, date: addDate, day: d, data: data })
      }
      rows[iteration-1].days = rows[iteration-1].days.concat(lastDaysData)
    }
    
    return rows
  }
  
  /**
   * @name getWeekHeader
   * @description
   * @return {{headerClassName: string, headerAlign: string, headerName: string, field: string, flex: number, editable: boolean, id: string, sortable: boolean, align: string}[]}
   */
  const getWeekHeader = () => {
    let data = []
    let weekStart = startOfWeek(selectedDay, { weekStartsOn: 1 })
    for (let i = 0; i < 7; i++) {
      let date = add(weekStart, {days: i})
      data.push({
        date: date,
        weekDay: format(date, 'iii'),
        day: format(date, 'dd'),
        month: format(date, 'MM'),
      })
    }
    return data
  }
  
  const getWeekRows = () => {
    const HOURS = 24 //* 2
    let data = []
    let dayStartHour = startOfDay(selectedDay)
    
    for (let i = 0; i <= HOURS; i++) {
      let id = `line_${i}`
      let label = format(dayStartHour, 'HH:mm aaa')
      
      //TODO Add everyday event capability
      //if (i === 0) {
        //id = `line_everyday`; label = 'Everyday'
      //}
      //TODO Place the processing bloc here if everyday capability is available
      // ...
      
      if (i > 0) {
        //Start processing bloc
        let obj = { id: id, label: label, days: [] }
        let columns = getWeekHeader()
        // eslint-disable-next-line
        columns.map((column, index) => {
          let data = events.filter((event) => {
            let eventDate = parse(event?.date, 'yyyy-MM-dd', new Date())
            return (
              isSameDay(column?.date, eventDate) &&
              event?.startHour?.toUpperCase() === label?.toUpperCase()
            )
          })
          obj.days.push({
            id: `column-${index}_m-${column.month}_d-${column.day}_${id}`,
            date: column?.date,
            data: data
          })
        })
        // Label affectation
        data.push(obj) // End processing bloc
        dayStartHour = add(dayStartHour, {minutes: 60}) // 30
      }
      //if (i > 0) {
      //  dayStartHour = add(dayStartHour, {minutes: 30})
      //}
    }
    return data
  }
  
  const getDayHeader = () => ([{
    date: selectedDay,
    weekDay: format(selectedDay, 'iii'),
    day: format(selectedDay, 'dd'),
    month: format(selectedDay, 'MM')
  }])
  
  const getDayRows = () => {
    const HOURS = 24
    let data = []
    let dayStartHour = startOfDay(selectedDay)
    
    for (let i = 0; i <= HOURS; i++) {
      let id = `line_${i}`
      let label = format(dayStartHour, 'HH:mm aaa')
      
      if (i > 0) {
        let obj = { id: id, label: label, days: [] }
        let columns = getDayHeader()
        let column = columns[0]
        let matchedEvents = events.filter((event) => {
          let eventDate = parse(event?.date, 'yyyy-MM-dd', new Date())
          return (
            isSameDay(column?.date, eventDate) &&
            event?.startHour?.toUpperCase() === label?.toUpperCase()
          )
        })
        obj.days.push({
          id: `column-_m-${column?.month}_d-${column?.day}_${id}`,
          date: column?.date,
          data: matchedEvents
        })
        
        data.push(obj)
        dayStartHour = add(dayStartHour, {minutes: 60})
      }
    }
    return data
  }
  
  
  const getTimeLineRows = () => (
    events.filter((event) => {
      let eventDate = parse(event?.date, 'yyyy-MM-dd', new Date())
      return isSameDay(selectedDay, eventDate)
    })
  )
  
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
  
  const handleEventsChange = async (item) => {
    onEventsChange(item)
    let eventIndex = events.findIndex(e => e.id === item?.id)
    if (eventIndex !== -1) {
      let oldObject = Object.assign({}, events[eventIndex])
      if (alrtProps?.showNotification && !alrtProps.open) {
        setAlrtProps({
          ...alrtProps,
          open: true,
          message: `
            ${item?.label} successfully moved from ${oldObject?.date}
            ${oldObject?.startHour} to ${item?.date} ${item?.startHour}
          `
        })
        setTimeout(() => {
          setAlrtProps({ ...alrtProps, open: false, message: '' })
        }, alrtProps.delay)
      }
    }
  }
  
  useEffect(() => {
    if (mode === 'month') {
      setState({...state, columns: getMonthHeader(), rows: getMonthRows()})
    }
    if (mode === 'week') {
      setState({...state, columns: getWeekHeader(), rows: getWeekRows()})
    }
    if (mode === 'day') {
      setState({...state, columns: getDayHeader(), rows: getDayRows()})
    }
    if (mode === 'timeline') {
      setState({...state, columns: getDayHeader(), rows: getTimeLineRows()})
    }
    // eslint-disable-next-line
  }, [daysInMonth, selectedDay, selectedDate, mode])
  
  return (
    <ThemeProvider theme={theme}>
      <Paper variant="outlined" elevation={0} sx={{p: 0}}>
        <SchedulerToolbar
          today={today}
          events={events}
          switchMode={mode}
          alertProps={alrtProps}
          toolbarProps={toolbarProps}
          onDateChange={handleDateChange}
          onModeChange={handleModeChange}
          onSearchResult={onSearchResult}
          onAlertCloseButtonClicked={onAlertCloseButtonClicked}
        />
        <Grid container spacing={0} alignItems="center" justifyContent="center">
          {mode === 'month' &&
          <TransitionMode in>
            <Grid item xs={12}>
              <MonthModeView
                options={options}
                date={selectedDate}
                rows={state?.rows}
                columns={state?.columns}
                onTaskClick={onTaskClick}
                onCellClick={onCellClick}
                searchResult={searchResult}
                onDateChange={handleDateChange}
                onEventsChange={handleEventsChange}
              />
            </Grid>
          </TransitionMode>}
          {mode === 'week' &&
          <TransitionMode in>
            <Grid item xs={12}>
              <WeekModeView
                events={events}
                options={options}
                date={selectedDate}
                rows={state?.rows}
                columns={state?.columns}
                onTaskClick={onTaskClick}
                onCellClick={onCellClick}
                searchResult={searchResult}
                onDateChange={handleDateChange}
                onEventsChange={handleEventsChange}
              />
            </Grid>
          </TransitionMode>}
          {mode === 'day' &&
          <TransitionMode in>
            <Grid item xs={12}>
              <DayModeView
                events={events}
                options={options}
                date={selectedDate}
                rows={state?.rows}
                columns={state?.columns}
                onTaskClick={onTaskClick}
                onCellClick={onCellClick}
                searchResult={searchResult}
                onDateChange={handleDateChange}
                onEventsChange={handleEventsChange}
              />
            </Grid>
          </TransitionMode>}
          {mode === 'timeline' &&
          <TransitionMode in>
            <Grid item xs={12}>
              <TimeLineModeView
                events={events}
                options={options}
                date={selectedDate}
                rows={state?.rows}
                columns={state?.columns}
                onTaskClick={onTaskClick}
                onCellClick={onCellClick}
                searchResult={searchResult}
                onDateChange={handleDateChange}
                onEventsChange={onEventsChange}
              />
            </Grid>
          </TransitionMode>}
        </Grid>
      </Paper>
    </ThemeProvider>
  )
}

Scheduler.propTypes = {
  events: PropTypes.array,
  options: PropTypes.object,
  alertProps: PropTypes.object,
  toolbarProps: PropTypes.object,
  onEventsChange: PropTypes.func,
  onCellClick: PropTypes.func,
  onTaskClick: PropTypes.func,
  onAlertCloseButtonClicked: PropTypes.func,
}

Scheduler.defaultProps = {

}

export default Scheduler