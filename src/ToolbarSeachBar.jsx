import React, {useContext, useState} from 'react'
import PropTypes from 'prop-types'
import { format, parse } from 'date-fns'
import { useTranslation } from 'react-i18next'
import { styled } from '@mui/material/styles'
import { TextField, Autocomplete, Box } from "@mui/material"
import DateFnsLocaleContext from "../locales/dateFnsContext"

const StyledAutoComplete = styled(Autocomplete)(({ theme }) => ({
  color: 'inherit',
  width: '94%',
  display: 'inline-flex',
  margin: theme.spacing(.5, 1.5),
  transition: theme.transitions.create('width'),
  [theme.breakpoints.up('sm')]: {
    width: '100%'
  },
  [theme.breakpoints.up('md')]: {
    width: '27ch'
  },
  [theme.breakpoints.up('lg')]: {
    width: '27ch'
  },
}))

function ToolbarSearchbar (props) {
  const {events, onInputChange} = props
  const { t } = useTranslation(['common'])
  const [value, setValue] = useState('')
  const dateFnsLocale = useContext(DateFnsLocaleContext)
  const [inputValue, setInputValue] = useState('')
  
  const handleOnChange = (event, newValue) => {
    setValue(newValue)
    if (onInputChange) onInputChange(newValue)
  }
  
  return (
    <StyledAutoComplete
      value={value}
      id="scheduler-autocomplete"
      inputValue={inputValue}
      sx={{ mb: 0, display: 'inline-flex' }}
      onChange={handleOnChange}
      options={events?.sort((a, b) => -b.groupLabel.localeCompare(a.groupLabel))}
      groupBy={(option) => option ? option?.groupLabel : null}
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
            {option?.groupLabel}
          </Box>
        )
       */
      getOptionLabel={(option) => (
        option ?
        `${option.groupLabel || ''} | (${option.startHour || ''} - ${option.endHour || ''})` : ''
      )}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue)
        onInputChange(newInputValue)
      }}
      renderOption={(props, option) => (
        <Box component="li" sx={{fontSize: 12}} {...props}>
          {format(
            parse(option?.date, 'yyyy-MM-dd', new Date()),
            'dd-MMMM-yyyy'
          )}
          ({option?.startHour || ''} - {option?.endHour || ''})
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          size="small"
          label={t('search')}
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