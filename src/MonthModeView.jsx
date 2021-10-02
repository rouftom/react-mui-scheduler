import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { format } from 'date-fns'
import {styled} from "@mui/system"
import { useTheme } from '@mui/material/styles'
import {
  Paper, Typography, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, tableCellClasses, Box
} from "@mui/material"
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    //backgroundColor: theme.palette.common.black,
    borderTop: `1px solid #ccc !important`,
    borderBottom: `1px solid #ccc !important`,
    borderLeft: `1px solid #ccc !important`,
    '&:nth-of-type(1)': {
      borderLeft: `0px !important`
    }
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    height: 96,
    width: 64,
    maxWidth: 64,
    cursor: 'pointer',
    borderLeft: `1px solid #ccc`,
    '&:nth-of-type(7n+1)': {
      borderLeft: 0
    },
    '&:nth-of-type(even)': {
      backgroundColor: theme.palette.action.hover
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

function MonthModeView (props) {
  const {
    options, columns, rows, searchResult, onTaskClick, onCellClick, onEventsChange
  } = props
  const theme = useTheme()
  const [state, setState] = useState({})
  
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
   * @param rowIndex
   * @return void
   */
  const onCellDragStart = (e, item, rowIndex) => {
    setState({...state, itemTransfert: {item, rowIndex}})
  }
  
  /**
   * @name onCellDragEnter
   * @description
   * @param e
   * @param elementId
   * @param rowIndex
   * @return void
   */
  const onCellDragEnter = (e, elementId, rowIndex) => {
    e.preventDefault()
    setState({...state, transfertTarget: {elementId, rowIndex}})
  }
  
  /**
   * @name onCellDragEnd
   * @description
   * @param e
   * @return void
   */
  const onCellDragEnd = (e) => {
    e.preventDefault()
    if (!state?.itemTransfert && !state?.transfertTarget) return
    let transfert = state.itemTransfert
    let transfertTarget = state.transfertTarget
    let rowsCopy = Array.from(rows)
    let rowInd = rowsCopy?.findIndex(d => d.id === transfertTarget.rowIndex)
    
    if (rowInd !== -1) {
      let dayInd = rowsCopy[rowInd]?.days?.findIndex(d => d.id === transfertTarget.elementId)
      
      if (dayInd !== -1) {
        let day = rowsCopy[rowInd]?.days[dayInd]
        let splittedDate = transfert?.item?.date?.split('-')
        
        if (!transfert?.item?.day) {
          // Get day of the date (DD)
          transfert.item.day = parseInt(splittedDate[2])
        }
        
        if (transfert.item.day !== day?.day) {
          let itemCheck = day.data.findIndex(item => (
            item.day === transfert.item.day && item.label === transfert.item.label
          ))
          
          if (itemCheck === -1) {
            let prevDayEvents = rowsCopy[transfert.rowIndex].days.find(d => d.day === transfert.item.day)
            let itemIndexToRemove = prevDayEvents?.data?.findIndex(i => i.id === transfert.item.id)
            
            if (itemIndexToRemove === undefined || itemIndexToRemove === -1) {
              return
            }
            
            prevDayEvents?.data?.splice(itemIndexToRemove, 1)
            transfert.item.day = day?.day
            transfert.item.date = format(day?.date, 'yyyy-MM-dd')
            day.data.push(transfert.item)
            setState({...state, rows: rowsCopy, itemTransfert: null, transfertTarget: null})
            onEventsChange(transfert.item)
          }
        }
      }
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
    event.preventDefault()
    event.stopPropagation()
    if (day?.data?.length === 0) {
      onCellClick(event, row, day)
    }
  }
  
  /**
   * @name renderTask
   * @description
   * @param tasks
   * @param rowId
   * @return {unknown[] | undefined}
   */
  const renderTask = (tasks = [], rowId) => {
    return tasks?.map((task, index) => (
      (
        (
          searchResult &&
          (task?.groupLabel === searchResult?.groupLabel || task?.user === searchResult?.user)
        ) || !searchResult
      ) &&
      (
        <Paper
          draggable
          onClick={(e) => handleTaskClick(e, task)}
          key={`item-d-${task?.id}-${rowId}`}
          elevation={0}
          sx={{
            width: "100%",
            py: 0,
            my: .3,
            color: "#fff",
            display: 'inline-flex',
            backgroundColor: task?.color || theme.palette.primary.light
          }}
          onDragStart={e => onCellDragStart(e, task, rowId)}
        >
          <Box sx={{px: 0.5}}>
            <Typography variant="caption">{task?.label}</Typography>
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
  
  return (
    <TableContainer component={Paper}>
      <Table
        size="small"
        aria-label="simple table"
        stickyHeader sx={{ minWidth: options?.minWidth || 650 }}
      >
        <TableHead sx={{height: 24}}>
          <StyledTableRow>
            {
              columns?.map((column, index) => (
                <StyledTableCell align="center" key={column?.headerName+ '-' +index}>
                  {column?.headerName}
                </StyledTableCell>
              ))
            }
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {
            rows?.map((row, index) => (
              <StyledTableRow
                key={`row-${row.id}-${index}`}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                {
                  row?.days?.map((day) => (
                    <StyledTableCell
                      scope="row"
                      align="center"
                      component="th"
                      sx={{px: 1}}
                      key={`day-${day.id}`}
                      onDragEnd={onCellDragEnd}
                      onDragOver={onCellDragOver}
                      onDragEnter={e => onCellDragEnter(e, day.id, row.id)}
                      onClick={(event) => handleCellClick(event, row, day)}
                    >
                      <Typography variant="body1">{day.day}</Typography>
                      {
                        (day?.data?.length > 0 && renderTask(day?.data, row.id)) ||
                        <EventNoteRoundedIcon fontSize="large" htmlColor="#ccc" />
                      }
                    </StyledTableCell>
                  ))
                }
              </StyledTableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

MonthModeView.propTypes = {
  columns: PropTypes.array,
  rows: PropTypes.array,
  date: PropTypes.string,
  options: PropTypes.object,
  onDateChange: PropTypes.func,
  onTaskClick: PropTypes.func,
  onCellClick: PropTypes.func
}

MonthModeView.defaultProps = {
  columns: [],
  rows: []
}

export default MonthModeView