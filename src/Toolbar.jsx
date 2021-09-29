import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { format, add, sub, getDaysInMonth, parse } from 'date-fns'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import {
  Typography, Toolbar, IconButton, Button, ToggleButton,
  TextField, Hidden, Alert, Collapse, ToggleButtonGroup,
  Divider, ListItemIcon, Menu, MenuItem
} from "@mui/material"
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import StaticDatePicker from '@mui/lab/StaticDatePicker'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import TodayIcon from '@mui/icons-material/Today'
import SettingsIcon from '@mui/icons-material/Settings'
import ArchiveIcon from '@mui/icons-material/Archive'
import AutorenewIcon from '@mui/icons-material/Autorenew'
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import ToolbarSearchbar from "./ToolbarSeachBar.jsx"


function SchedulerToolbar (props) {
  const {
    // events data
    events, today, toolbarProps,
    // Mode
    onModeChange, onSearchResult,
    // Alert props
    openAlert, alertMessage, alertProps,
    // Date
    onDateChange
  } = props
  
  const [searchResult, setSearchResult] = useState()
  const [mode, setMode] = useState('month')
  const [anchorMenuEl, setAnchorMenuEl] = useState(null)
  const [anchorDateEl, setAnchorDateEl] = useState(null)
  const [selectedDate, setSelectedDate] = useState(today || new Date())
  const [daysInMonth, setDaysInMonth] = useState(getDaysInMonth(selectedDate))
  
  const openMenu = Boolean(anchorMenuEl)
  const openDateSelector = Boolean(anchorDateEl)
  
  const commonIconButtonProps = {
    size: "medium",
    edge: "start",
    color: "inherit",
    "aria-label":"menu"
  }
  
  const menus = [
    {
      label: "Read events",
      icon: <PlayCircleOutlineIcon fontSize="small" />
    },
    {
      label: "Refresh",
      icon: <AutorenewIcon fontSize="small" />
    },
    {
      label: "Export",
      icon: <ArchiveIcon fontSize="small" />
    },
    {
      label: "Print",
      icon: <LocalPrintshopIcon fontSize="small" />
    },
  ]
  
  /**
   * @name handleOpenMenu
   * @description
   * @param event
   * @return void
   */
  const handleOpenMenu = (event) => {
    setAnchorMenuEl(event.currentTarget)
  }
  
  /**
   * @name handleCloseMenu
   * @description
   * @return void
   */
  const handleCloseMenu = () => {
    setAnchorMenuEl(null)
  }
  
  /**
   * @name handleOpenDateSelector
   * @description
   * @param event
   * @return void
   */
  const handleOpenDateSelector = (event) => {
    setAnchorDateEl(event.currentTarget)
  }
  
  /**
   * @name handleCloseDateSelector
   * @description
   * @return void
   */
  const handleCloseDateSelector = () => {
    setAnchorDateEl(null)
  }
  
  /**
   * @name handleChangeDate
   * @description
   * @param method
   * @return void
   */
  const handleChangeDate = (method) => {
    if (typeof method !== 'function') return
    let newDate = method(selectedDate, {months: 1})
    setDaysInMonth(getDaysInMonth(newDate))
    setSelectedDate(newDate)
  }
  
  useEffect(() => {
    if (mode) { onModeChange(mode) }
  }, [mode])
  
  useEffect(() => {
    onDateChange(daysInMonth, selectedDate)
  }, [daysInMonth, selectedDate])
  
  useEffect(() => {
    onSearchResult(searchResult)
  }, [searchResult])
  
  return (
    <Toolbar
      variant="dense"
      sx={{display: 'contents', alignItems: 'center'}}
    >
      <Typography
        component="div"
        sx={{m: .5, display: 'flex', alignItems: 'center'}}
      >
        {toolbarProps.showDatePicker &&
        <Typography component="div" sx={{ flexGrow: 1 }}>
          <Hidden smDown>
            <IconButton
              sx={{ mr: 1, ml: 0 }}
              {...commonIconButtonProps}
              onClick={() => handleChangeDate(sub)}
            >
              <ChevronLeftIcon />
            </IconButton>
            <Button
              size="medium"
              id="basic-button"
              aria-haspopup="true"
              endIcon={<TodayIcon />}
              aria-controls="basic-menu"
              onClick={handleOpenDateSelector}
              aria-expanded={openDateSelector ? 'true' : undefined}
            >
              {format(selectedDate, 'MMMM-yyyy')}
            </Button>
            <IconButton
              sx={{ ml: 1 }}
              {...commonIconButtonProps}
              onClick={() => handleChangeDate(add)}
            >
              <ChevronRightIcon />
            </IconButton>
          </Hidden>
          <Hidden smUp>
            <IconButton{...commonIconButtonProps} onClick={handleOpenDateSelector}>
              <TodayIcon />
            </IconButton>
          </Hidden>
          <Menu
            id="date-menu"
            anchorEl={anchorDateEl}
            open={openDateSelector}
            onClose={handleCloseDateSelector}
            MenuListProps={{'aria-labelledby': 'basic-button'}}
          >
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <StaticDatePicker
                displayStaticWrapperAs="desktop"
                value={selectedDate}
                onChange={(newValue) => {
                  setDaysInMonth(getDaysInMonth(newValue))
                  setSelectedDate(newValue)
                  handleCloseDateSelector()
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Menu>
        </Typography>}
        <Typography
          component="div"
          sx={{display: 'inline-flex', alignItems: 'center'}}
        >
          {toolbarProps?.showSearchBar &&
          <ToolbarSearchbar
            events={events}
            onInputChange={(newValue) => {
              let newDate = newValue?.date ? parse(newValue?.date, 'yyyy-MM-dd', today) : new Date()
              setDaysInMonth(getDaysInMonth(newDate))
              setSelectedDate(newDate)
              setSearchResult(newValue)
            }}
          />}
          {toolbarProps?.showSwitchModeButtons &&
          <ToggleButtonGroup
            exclusive
            disabled
            value={mode}
            size="small"
            color="primary"
            aria-label="text button group"
            onChange={(e, newMode) => { setMode(newMode) }}
          >
            {['month', 'Week', 'Day'].map(tb => (
              <ToggleButton key={tb} value={tb}>{tb}</ToggleButton>
            ))}
          </ToggleButtonGroup>}
          {toolbarProps?.showOptions &&
          <IconButton sx={{ ml: 1 }} onClick={handleOpenMenu}{...commonIconButtonProps}>
            <MoreVertIcon />
          </IconButton>}
        </Typography>
      </Typography>
      <Menu
        id="menu-menu"
        open={openMenu}
        anchorEl={anchorMenuEl}
        onClose={handleCloseMenu}
        onClick={handleCloseMenu}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {menus.map((menu, index) => (
          <MenuItem key={menu.label}>
            <ListItemIcon>{menu.icon}</ListItemIcon>
            <Typography variant="body2">{menu.label}</Typography>
          </MenuItem>
        ))}
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="body2">Settings</Typography>
        </MenuItem>
      </Menu>
      {openAlert &&
      <Typography component="div" sx={{mt: 1}}>
        <Collapse in>
          <Alert {...alertProps} sx={{borderRadius: 0, mb: 0}}>
            {alertMessage}
          </Alert>
        </Collapse>
      </Typography>}
    </Toolbar>
  )
}

SchedulerToolbar.propTypes = {
  title: PropTypes.string,
  openAlert: PropTypes.bool,
  alertMessage: PropTypes.string,
  alertProps: PropTypes.object,
  onDateChange: PropTypes.func
}

SchedulerToolbar.defaultProps = {
  openAlert: false,
  alertMessage: 'This is a scheduler alert',
  alertProps: {color: 'info', severity: 'info'},
  toolbarProps: {
    showSearchBar: true,
    showSwitchModeButtons: false,
    showDatePicker: true,
    showOptions: false
  }
}

export default SchedulerToolbar
