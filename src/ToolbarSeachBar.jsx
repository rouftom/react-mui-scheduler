import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { format, parse } from 'date-fns'
import { styled } from '@mui/material/styles'
import { TextField, Autocomplete, Box } from "@mui/material"
import { useTheme } from '@mui/material/styles'

const StyledAutoComplete = styled(Autocomplete)(({ theme }) => ({
  color: 'inherit',
  minWidth: '20ch',
  display: 'inline-flex',
  margin: theme.spacing(.5, 1.5),
  transition: theme.transitions.create('width'),
  [theme.breakpoints.up('sm')]: {
    width: '30ch'
  }
}))

function ToolbarSearchbar (props) {
  const theme = useTheme()
  const {events, onInputChange} = props
  
  const [value, setValue] = useState('')
  const [inputValue, setInputValue] = useState('')
  
  const handleOnChange = (event, newValue) => {
    setValue(newValue)
    onInputChange(newValue)
  }
  
  return (
    <StyledAutoComplete
      value={value}
      id="autocomplete-2-demo"
      inputValue={inputValue}
      sx={{display: 'inline-flex'}}
      onChange={handleOnChange}
      options={events}
      groupBy={(option) => (
        <Box sx={{display: "flex", alignItems: "center"}}>
          <Box
            component="span"
            sx={{
              width: 16,
              height: 16,
              mr: 1,
              borderRadius: "50%",
              backgroundColor: option?.color || theme.palette.secondary.main
            }}
          />
          {option?.title}
        </Box>
      )}
      /*
      (
          <Box sx={{display: "flex", alignItems: "center"}}>
            <Box
              component="span"
              sx={{
                width: 16,
                height: 16,
                mr: 1,
                borderRadius: "50%",
                backgroundColor: option?.color || theme.palette.secondary.main
              }}
            />
            {option?.title}
          </Box>
        )
       */
      getOptionLabel={(option) => (
        option &&
        `${option?.title} | (${option?.startHour} - ${option?.endHour})`
      )}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue)
        onInputChange(newInputValue)
      }}
      renderOption={(props, option) => (
        <Box component="li" sx={{fontSize: 12}} {...props}>
          {format(parse(option?.date, 'yyyy-MM-dd', new Date()), 'dd-MMMM-yyyy')} ({option?.startHour} - {option?.endHour})
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          size="small"
          label="Search..."
          InputProps={{...params.InputProps}}
        />
      )}
    />
  )
}

ToolbarSearchbar.propTypes = {
  events: PropTypes.array,
  onInputChange: PropTypes.func,
}

ToolbarSearchbar.defaultProps = {

}

export default ToolbarSearchbar