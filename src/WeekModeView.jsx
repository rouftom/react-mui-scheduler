import React, {useContext, useState} from 'react'
import PropTypes from 'prop-types'
import { useTheme, styled } from '@mui/material/styles'
import {
  Paper, Typography, Table, TableBody, TableCell, Tooltip,
  TableContainer, TableHead, TableRow, tableCellClasses,
} from "@mui/material"
import { 
  format, parse, add, differenceInMinutes, isValid 
} from 'date-fns'
import EventItem from "./EventItem.jsx"

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    paddingLeft: 4,
    paddingRight: 4,
    borderTop: `1px solid #ccc !important`,
    borderBottom: `1px solid #ccc !important`,
    borderLeft: `1px solid #ccc !important`,
    ['&:nth-of-type(1)']: { borderLeft: `0px !important` }
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
    height: 16,
    width: 128,
    maxWidth: 128,
    cursor: 'pointer',
    borderLeft: `1px solid #ccc`,
    ['&:nth-of-type(1)']: {
      width: 80,
      maxWidth: 80,
    },
    ['&:nth-of-type(8n+1)']: { borderLeft: 0 }
  },
  [`&.${tableCellClasses.body}:hover`]: {
    backgroundColor: "#eee"
  }
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  ['&:last-child td, &:last-child th']: {
    border: 0
  }
}))

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  ['&::-webkit-scrollbar']: {
    width: 7,
    height: 6
  },
  ['&::-webkit-scrollbar-track']: {
    WebkitBoxShadow: "inset 0 0 6px rgb(125, 161, 196, 0.5)"
  },
  ['&::-webkit-scrollbar-thumb']: {
    WebkitBorderRadius: 4,
    borderRadius: 4,
    background: "rgba(0, 172, 193, .5)",
    WebkitBoxShadow: "inset 0 0 6px rgba(25, 118, 210, .5)"
  },
  ['&::-webkit-scrollbar-thumb:window-inactive']: {
    background: "rgba(125, 161, 196, 0.5)"
  }
}))

function WeekModeView (props) {
  const {
    options,
    columns,
    rows,
    searchResult,
    onTaskClick,
    onCellClick,
    onEventsChange
  } = props
  const theme = useTheme()
  const [state, setState] = useState({columns, rows})

  const onCellDragOver = (e) => {
    e.preventDefault()
  }

  const onCellDragStart = (e, item, rowLabel, rowIndex, dayIndex) => {
    setState({
      ...state,
      itemTransfert: { item, rowLabel, rowIndex, dayIndex }}
    )
  }

  const onCellDragEnter = (e, rowLabel, rowIndex, dayIndex) => {
    e.preventDefault()
    setState({
      ...state,
      transfertTarget: { rowLabel, rowIndex, dayIndex }
    })
  }

  const onCellDragEnd = (e) => {
    e.preventDefault()
    if (!state.itemTransfert || !state.transfertTarget) {
      return
    }
    let transfert = state.itemTransfert
    let transfertTarget = state.transfertTarget
    let rowsData = Array.from(rows)
    let day = rowsData[transfertTarget.rowIndex]?.days[transfertTarget.dayIndex]
    
    if (day) {
      let hourRegExp = /[0-9]{2}:[0-9]{2}/
      let foundEventIndex = day.data.findIndex(e =>
        e.id === transfert.item.id &&
        e.startHour === transfert.item.startHour &&
        e.endHour === transfert.item.endHour
      )
      // Task already exists in the data array of the chosen cell
      if (foundEventIndex !== -1) {
        return
      }
  
      // Event cell item to transfert
      let prevEventCell = rowsData[transfert.rowIndex].days[transfert.dayIndex]
      // Timeline label (00:00 am, 01:00 am, etc.)
      let label = transfertTarget.rowLabel?.toUpperCase()
      let hourLabel = hourRegExp.exec(label)[0]
      // Event's end hour
      let endHour =  hourRegExp.exec(transfert.item.endHour)[0]
      let endHourDate = parse(endHour, 'HH:mm', day.date)
      // Event start hour
      let startHour =  hourRegExp.exec(transfert.item.startHour)[0]
      let startHourDate = parse(startHour, 'HH:mm', day.date)
      // Minutes difference between end and start event hours
      let minutesDiff = differenceInMinutes(endHourDate, startHourDate)
      // New event end hour according to it new cell
      let newEndHour = add(
        parse(hourLabel, 'HH:mm', day.date), {minutes: minutesDiff}
      )
  
      if (!isValid(startHourDate)) {
        startHourDate = day.date
        minutesDiff = differenceInMinutes(endHourDate, startHourDate)
        newEndHour = add(
          parse(hourLabel, 'HH:mm', day.date), {minutes: minutesDiff}
        )
      }
      
      prevEventCell?.data?.splice(transfert.item.itemIndex, 1)
      transfert.item.startHour = label
      transfert.item.endHour = format(
        newEndHour,
        'HH:mm aaa'
      )
      transfert.item.date = format(
        day.date,
        'yyyy-MM-dd'
      )
      day.data.push(transfert.item)
      setState({...state, rows: rowsData})
      onEventsChange && onEventsChange(transfert.item)
    }
  }

  const handleCellClick = (event, row, day) => {
    event.preventDefault()
    event.stopPropagation()
    //setState({...state, activeItem: day})
    onCellClick && onCellClick(event, row, day)
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
    return tasks?.map((task, itemIndex) => {
      let condition = (
        searchResult ?
        (
          task?.groupLabel === searchResult?.groupLabel ||
          task?.user === searchResult?.user
        ) : !searchResult
      )
      return (
        condition &&
        <EventItem
          event={task}
          elevation={0}
          boxSx={{px: 0.3}}
          onClick={e => handleTaskClick(e, task)}
          key={`item_id-${itemIndex}_r-${rowIndex}_d-${dayIndex}`}
          onDragStart={e => onCellDragStart(
            e, {...task, itemIndex}, rowLabel, rowIndex, dayIndex
          )}
          sx={{
            py: 0, mb: .5, color: "#fff",
            backgroundColor: task?.color || theme.palette.primary.light
          }}
        />
      )
    })
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
    onTaskClick && onTaskClick(event, task)
  }
  
  return (
    <StyledTableContainer
      component={Paper}
      sx={{ maxHeight: options?.maxHeight || 540 }}
    >
      <Table
        size="small"
        aria-label="simple table"
        stickyHeader sx={{ minWidth: options.minWidth || 540 }}
      >
        <TableHead sx={{height: 24}}>
          <StyledTableRow>
            <StyledTableCell align="left" />
            {columns?.map((column, index) => (
              <StyledTableCell
                align="center"
                key={`weekday-${column?.day}-${index}`}
              >
                {column?.weekDay} {column?.month}/{column?.day}
              </StyledTableCell>
            ))}
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {
            rows?.map((row, rowIndex) => {
              let lineTasks = row.days?.reduce(
                (prev, curr) => prev + curr?.data?.length, 0
              )
              return (
                <StyledTableRow
                  key={`timeline-${rowIndex}`}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <Tooltip
                    placement="right"
                    title={`${lineTasks} event${lineTasks > 1 ? 's' : ''} on this week timeline`}
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
                  </Tooltip>
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
                        {day?.data?.length > 0 &&
                        renderTask(
                          day?.data,
                          row?.label,
                          rowIndex,
                          dayIndex
                        )}
                      </StyledTableCell>
                    )
                  })}
                </StyledTableRow>
              )
            })
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