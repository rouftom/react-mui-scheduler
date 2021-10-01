import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {styled} from "@mui/system"
import { useTheme } from '@mui/material/styles'
import {
  Paper, Typography, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, tableCellClasses, Box,
} from "@mui/material"
import { format, parse, add, differenceInMinutes, isValid } from 'date-fns'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    paddingLeft: 4,
    paddingRight: 4,
    borderTop: `1px solid #ccc !important`,
    borderBottom: `1px solid #ccc !important`,
    borderLeft: `1px solid #ccc !important`,
    "&:nth-of-type(1)": { borderLeft: `0px !important` }
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
    height: 16,
    width: 128,
    maxWidth: 128,
    cursor: 'pointer',
    borderLeft: `1px solid #ccc`,
    "&:nth-of-type(1)": {
      width: 80,
      maxWidth: 80,
    },
    "&:nth-of-type(8n+1)": { borderLeft: 0 },
    "&:nth-of-type(even)": {
      //backgroundColor: theme.palette.action.hover
    },
  },
  [`&.${tableCellClasses.body}:hover`]: {
    backgroundColor: "#eee"
  }
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    //backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0
  }
}))

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  "&::-webkit-scrollbar": {
    width: 7,
    height: 6
  },
  "&::-webkit-scrollbar-track": {
    WebkitBoxShadow: "inset 0 0 6px rgb(125, 161, 196, 0.5)"
  },
  "&::-webkit-scrollbar-thumb": {
    WebkitBorderRadius: 4,
    borderRadius: 4,
    background: "rgba(0, 172, 193, .5)",
    WebkitBoxShadow: "inset 0 0 6px rgba(25, 118, 210, .5)"
  },
  "&::-webkit-scrollbar-thumb:window-inactive": {
    background: "rgba(125, 161, 196, 0.5)"
  }
}))

function WeekModeView (props) {
  const {
    options, columns, rows, searchResult, onTaskClick, onCellClick, onEventsChange
  } = props
  const theme = useTheme()
  const [state, setState] = useState({columns, rows})
  
  /**
   * @name onCellDragOver
   * @param e
   * @return void
   */
  const onCellDragOver = (e) => {
    e.preventDefault()
  }
  
  /**
   * @name onCellDragStart
   * @description
   * @param e
   * @param item
   * @param rowLabel
   * @param rowIndex
   * @param dayIndex
   * @return void
   */
  const onCellDragStart = (e, item, rowLabel, rowIndex, dayIndex) => {
    setState({
      ...state,
      itemTransfert: {item, rowLabel, rowIndex, dayIndex}}
    )
  }
  
  /**
   * @name onCellDragEnter
   * @description
   * @param e
   * @param rowLabel
   * @param rowIndex
   * @param dayIndex
   * @return void
   */
  const onCellDragEnter = (e, rowLabel, rowIndex, dayIndex) => {
    e.preventDefault()
    setState({...state, transfertTarget: {rowLabel, rowIndex, dayIndex}})
  }
  
  /**
   * @name onCellDragEnd
   * @description
   * @param e
   * @return void
   */
  const onCellDragEnd = (e) => {
    e.preventDefault()
    if (!state?.itemTransfert || !state?.transfertTarget) {
      return //console.log('undefined source or target')
    }
    
    let transfert = state.itemTransfert
    let transfertTarget = state.transfertTarget
    let rowsData = Array.from(rows)
    let day = rowsData[transfertTarget?.rowIndex]?.days[transfertTarget?.dayIndex]
    
    if (day) {
      let foundEventIndex = day.data.findIndex(e =>
        e.id === transfert.item.id &&
        e.startHour === transfert?.item?.startHour &&
        e.endHour === transfert?.item?.endHour
      )
      // Task already exists in the data array of the chosen cell
      if (foundEventIndex !== -1) {
        return
      }
  
      // Timeline label (00:00 am, 01:00 am, etc.)
      let label = transfertTarget.rowLabel?.toUpperCase()
      // Event cell item to transfert
      let prevEventCell = rowsData[transfert?.rowIndex].days[transfert?.dayIndex]
      // Event's end hour
      let endHourDate = parse(transfert.item.endHour, 'p', day?.date)
      // Event start hour
      let startHourDate = parse(transfert.item.startHour, 'p', day?.date)
      // Minutes difference between end and start event hours
      let minutesDiff = differenceInMinutes(endHourDate, startHourDate)
      // New event end hour according to it new cell
      let newEndHour = add(
        parse(label, 'p', day?.date), {minutes: minutesDiff}
      )
  
      // If event is moved from timeline 00:00 AM
      if (label === '00:00 AM') {
        minutesDiff = differenceInMinutes(endHourDate, startHourDate)
        newEndHour = add(day?.date, {minutes: minutesDiff})
      }
  
      // If event is moved from timeline 01:00 AM
      if (label === '01:00 AM') {
        minutesDiff = differenceInMinutes(endHourDate, startHourDate)
        newEndHour = add(parse(label, 'p', day?.date), {minutes: minutesDiff})
        
        if (!isValid(startHourDate)){
          startHourDate = day?.date
          minutesDiff = differenceInMinutes(endHourDate, startHourDate)
          newEndHour = add(
            parse(label, 'p', startHourDate), {minutes: minutesDiff}
          )
        }
      }
  
      // If the start date of event is invalid, it's probably cause by date-fns
      // So we initialize it at 00:00 AM of the event day
      if (!isValid(startHourDate)){
        startHourDate = day?.date
        minutesDiff = differenceInMinutes(endHourDate, startHourDate)
        newEndHour = add(day?.date, {minutes: minutesDiff})
  
        if (label !== '00:00 AM') {
          newEndHour = add(
            parse(label, 'p', startHourDate), {minutes: minutesDiff}
          )
        }
      }
      
      prevEventCell?.data?.splice(transfert?.item?.itemIndex, 1)
      transfert.item.startHour = label
      transfert.item.endHour = format(newEndHour, 'HH:mm aaa')
      transfert.item.date = format(day?.date, 'yyyy-MM-dd')
      day.data.push(transfert.item)
      setState({...state, rows: rowsData})
    }
  }
  
  /**
   * @name handleCellClick
   * @description
   * @param event
   * @param row
   * @param day
   * @return void
   */
  const handleCellClick = (event, row, day) => {
    console.log(day)
    event.preventDefault()
    event.stopPropagation()
    //setState({...state, activeItem: day})
    onCellClick(event, row, day)
  }
  
  /**
   * @name renderTask
   * @description
   * @param tasks
   * @param rowLabel
   * @param rowIndex
   * @param dayIndex
   * @return {unknown[] | undefined}
   */
  const renderTask = (tasks, rowLabel, rowIndex, dayIndex) => {
    return tasks?.map((task, itemIndex) => (
      (
        (
          searchResult &&
          (task?.groupLabel === searchResult?.groupLabel || task?.user === searchResult?.user)
        ) || !searchResult
      ) &&
      (
        <Paper
          draggable
          elevation={0}
          onClick={(e) => handleTaskClick(e, task)}
          key={`item_id-${itemIndex}_r-${rowIndex}_d-${dayIndex}`}
          onDragStart={e => onCellDragStart(
            e, {...task, itemIndex}, rowLabel, rowIndex, dayIndex
          )}
          sx={{
            py: 0, mb: .5, color: "#fff",
            backgroundColor: task?.color || theme.palette.primary.light
          }}
        >
          <Box sx={{px: 0.3}}>
            <Typography variant="caption" noWrap>{task?.label}</Typography>
          </Box>
        </Paper>
      )
    ))
  }
  
  /**
   * @name handleTaskClick
   * @description
   * @param event
   * @param task
   * @return void
   */
  const handleTaskClick = (event, task) => {
    event.preventDefault()
    event.stopPropagation()
    onTaskClick(event, task)
  }
  
  useEffect(() => {
    if (state?.rows && state?.itemTransfert?.item) {
      onEventsChange(state?.itemTransfert?.item)
    }
    // eslint-disable-next-line
  }, [state?.rows, state?.itemTransfert?.item])
  
  return (
    <StyledTableContainer
      component={Paper}
      sx={{
        minHeight: options?.minHeight || 540,
        maxHeight: options?.maxHeight || 540
      }}
    >
      <Table
        size="small"
        aria-label="simple table"
        stickyHeader sx={{
          minWidth: options?.minWidth || 650,
          maxWidth: options?.maxWidth || 650
        }}
      >
        <TableHead sx={{height: 24}}>
          <StyledTableRow>
            <StyledTableCell align="left" />
            {
              columns?.map((column, index) => (
                <StyledTableCell
                  align="center"
                  key={`weekday-${column?.day}-${index}`}
                >
                  {column?.weekDay} {column?.month}/{column?.day}
                </StyledTableCell>
              ))
            }
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {
            rows?.map((row, rowIndex) => (
              <StyledTableRow
                key={`timeline-${rowIndex}`}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <StyledTableCell
                  scope="row"
                  align="center"
                  component="th"
                  sx={{px: 1}}
                  onClick={(event) => handleCellClick(event, row)}
                >
                  <Typography variant="body2">{row?.label}</Typography>
                  {row?.data?.length > 0 && renderTask(row?.data, row.id)}
                </StyledTableCell>
                {row?.days?.map((day, dayIndex) => {
                  return (
                    <StyledTableCell
                      key={day?.id}
                      scope="row"
                      align="center"
                      component="th"
                      sx={{
                        px: .3, py: .5,
                        //backgroundColor: (
                        //  state?.activeItem?.id === day?.id ? theme.palette.action.hover : 'inherit'
                        //)
                      }}
                      onDragEnd={onCellDragEnd}
                      onDragOver={onCellDragOver}
                      onDragEnter={e => onCellDragEnter(e, row?.label, rowIndex, dayIndex)}
                      onClick={(event) => handleCellClick(
                        event, {rowIndex, ...row}, {dayIndex, ...day}
                      )}
                    >
                      {day?.data?.length > 0 && renderTask(day?.data, row?.label, rowIndex, dayIndex)}
                    </StyledTableCell>
                  )
                })}
              </StyledTableRow>
            ))
          }
        </TableBody>
      </Table>
    </StyledTableContainer>
  )
}

WeekModeView.propTypes = {
  events: PropTypes.array,
  columns: PropTypes.array,
  rows: PropTypes.array,
  date: PropTypes.string,
  options: PropTypes.object,
  searchResult: PropTypes.object,
  onDateChange: PropTypes.func.isRequired,
  onTaskClick: PropTypes.func.isRequired,
  onCellClick: PropTypes.func.isRequired,
  onEventsChange: PropTypes.func.isRequired
}

WeekModeView.defaultProps = {

}

export default WeekModeView