<p align="center"><a href="" target="_blank"><img align="center" src="https://user-images.githubusercontent.com/12144793/166131609-62c6fa1d-c8fc-4147-8adc-78260836b94b.gif"></a></p>

<!-- ![month-mode-preview.png](https://user-images.githubusercontent.com/12144793/166131609-62c6fa1d-c8fc-4147-8adc-78260836b94b.gif "Month mode preview") -->

<h1 align="center">📅 React Material Scheduler</h1>
<p align="center">developed with <a target="_blank" href="https://mui.com">@mui v5</a> </p>

<p align="center">
  <img alt="MIT license" src="https://img.shields.io/badge/license-MIT-blue.svg">
  <img alt="GitHub release (latest by date)" src="https://img.shields.io/github/v/release/rouftom/react-mui-scheduler">
  <img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/rouftom/react-mui-scheduler">
  <img alt="Snyk Vulnerabilities for GitHub Repo" src="https://img.shields.io/snyk/vulnerabilities/github/rouftom/react-mui-scheduler">
</p>

---

React mui scheduler is a react component based on @mui v5 that allows you to manage data in a calendar.
<p><a href="https://rouftom.github.io/react-mui-scheduler-demo/" target="_blank">Demo here</a></p>

## 🚀 Installation
```nodejs
  npm install react-mui-scheduler
```

## 💻 Usage
```javascript
import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import Scheduler from "react-mui-scheduler"

function App() {
  const [state] = useState({
    options: {
      transitionMode: "zoom", // or fade
      startWeekOn: "mon",     // or sun
      defaultMode: "month",    // or week | day | timeline
      minWidth: 540,
      maxWidth: 540,
      minHeight: 540,
      maxHeight: 540
    },
    alertProps: {
      open: true,
      color: "info",          // info | success | warning | error
      severity: "info",       // info | success | warning | error
      message: "🚀 Let's start with awesome react-mui-scheduler 🔥 🔥 🔥" ,
      showActionButton: true,
      showNotification: true,
      delay: 1500
    },
    toolbarProps: {
      showSearchBar: true,
      showSwitchModeButtons: true,
      showDatePicker: true
    }
  })
  
  const events = [
    {
      id: "event-1",
      label: "Medical consultation",
      groupLabel: "Dr Shaun Murphy",
      user: "Dr Shaun Murphy",
      color: "#f28f6a",
      startHour: "04:00 AM",
      endHour: "05:00 AM",
      date: "2022-05-05",
      createdAt: new Date(),
      createdBy: "Kristina Mayer"
    },
    {
      id: "event-2",
      label: "Medical consultation",
      groupLabel: "Dr Claire Brown",
      user: "Dr Claire Brown",
      color: "#099ce5",
      startHour: "09:00 AM",
      endHour: "10:00 AM",
      date: "2022-05-09",
      createdAt: new Date(),
      createdBy: "Kristina Mayer"
    },
    {
      id: "event-3",
      label: "Medical consultation",
      groupLabel: "Dr Menlendez Hary",
      user: "Dr Menlendez Hary",
      color: "#263686",
      startHour: "13 PM",
      endHour: "14 PM",
      date: "2022-05-10",
      createdAt: new Date(),
      createdBy: "Kristina Mayer"
    },
    {
      id: "event-4",
      label: "Consultation prénatale",
      groupLabel: "Dr Shaun Murphy",
      user: "Dr Shaun Murphy",
      color: "#f28f6a",
      startHour: "08:00 AM",
      endHour: "09:00 AM",
      date: "2022-05-11",
      createdAt: new Date(),
      createdBy: "Kristina Mayer"
    }
  ]
  
  const handleCellClick = (event, row, day) => {
    // Do something...
  }
  
  const handleEventClick = (event, item) => {
    // Do something...
  }
  
  const handleEventsChange = (item) => {
    // Do something...
  }
  
  const handleAlertCloseButtonClicked = (item) => {
    // Do something...
  }
  
  return (
    <Scheduler
      locale="en"
      events={events}
      legacyStyle={false}
      options={state?.options}
      alertProps={state?.alertProps}
      toolbarProps={state?.toolbarProps}
      onEventsChange={handleEventsChange}
      onCellClick={handleCellClick}
      onTaskClick={handleEventClick}
      onAlertCloseButtonClicked={handleAlertCloseButtonClicked}
    />
  )
}

ReactDOM.render(<App />, document.querySelector('#yourComponentRootId'))

```

## Data structure

| Name 	|  Type 	|   Required	|  Details 	|  
|------	|---	|---	|---	|
|    id  	|  `string` 	|  `true` 	|  unique id for every event 	|
|    label  	|  `string` 	|  `true` 	|   	| 
|    color  	|  `string` 	|  `true` 	|  If not set, the primary color of the theme will be applied 	| 
|    groupLabel  	|  `string` 	|  `true` 	|   	|
|    startHour  	|  `string` 	|  `true` 	|  Hour string format with `HH:mm aaa` 	|  
|    endHour  	|  `string` 	|  `true` 	|  Hour string format with `HH:mm aaa` 	| 
|    date  	|  `string` 	|  `true` 	|  Date string, must be formatted with `yyyy-MM-dd` date format 	| 


For more details about date formats, see [date-fns docs](https://date-fns.org/v2.24.0/docs/)


## Props

| Name 	|  Type 	|   Default	|  Description 	|  Values 	|
|------	|---	|---	|---	|---	|
|    locale  	|  string 	|  `en` 	|  This prop is used to set the locale of the scheduler 	|  `ar`, `de`, `en`, `es`, `fr`, `ja`, `ko`, `zh` 	|
|   events   	|   object	|   	|   This prop sets event data	|   	|
|    legacyStyle  	|  boolean 	|  `false` 	|  This prop allows to use the old display style 	|  `false`, `true` 	|
|    options  	|  object 	|   	|  This prop is used to set scheduler properties 	|   	|
|    alertProps  	|  object 	|   	|  This prop is used to set scheduler properties 	|    	|
|    toolbarProps  	|  object 	|   	|  This prop is used to set toolbar properties 	|   	|
|    onEventsChange  	|  event 	|   	|  This event is fired when the event change occurs 	|   	|
|    onCellClick  	|  event 	|   	|  This event is fired when a cell is clicked 	|   	|
|    onTaskClick  	|  event 	|   	|  This event is fired when a task is clicked 	|   	|
|    onAlertCloseButtonClicked  	|  event 	|   	|  This event is fired when the close button of the alert component 	|   	|



## Options

| Name 	|  Type 	|   Default	|  Description 	|  Values 	|
|------	|---	|---	|---	|---	|
|    transitionMode  	|  string 	|  `zoom` 	|  This option is used to define the type of scheduler transition 	|  `zoom`, `fade`, `slide` 	|
|   startWeekOn   	|   string	|  `mon` 	|   This option is used to set the start of the calendar week to Monday or Sunday	|  `mon`, `sun` 	|
|    defaultMode  	|  string 	|  `week` 	|  This option allows you to define the type of view to display 	|  `month`, `week`, `day`, `timeline` 	|
|    minWidth  	|  number 	|  `540` 	|  This option allows you to define the minimum width of the container 	|  `number` 	|
|    maxWidth  	|  number 	|  `540` 	|  This option allows you to define the maximum width of the container 	|  `number` 	|
|    minHeight  	|  number 	|  `540` 	|  This option allows you to define the minimum height of the container 	|  `number` 	|
|    maxHeigh  	|  number 	|  `540` 	|  This option allows you to define the maximum height of the container 	|  `number` 	|



## alertProps

| Name 	|  Type 	|   Default	|  Description 	|  Values 	|
|------	|---	|---	|---	|---	|
|    open  	|  boolean 	|  `true` 	|  This option opens the notification Alert component 	|  `true`, `false` 	|
|   color   	|   string	|  `info` 	|   Alert notification color	|  `info`, `success`, `warning`, `error` 	|
|    severity  	|  string 	|  `info` 	|  Alert notification severity 	|  `info`, `success`, `warning`, `error` 	|
|    message  	|  string 	|  `🚀 Let's start with awesome react-mui-scheduler 🔥 🔥 🔥` 	|  Alert notification message to display 	|  `string` 	|
|    showActionButton  	|  boolean 	|  `true` 	|  This option displays or not the action button on the Alert 	|  `boolean` 	|
|    showNotification  	|  boolean 	|  `true` 	|  This option allows to display or not a notification when data change 	|  `boolean` 	|
|    delay  	|  number 	|  `1500` 	|  This option allows you to define the display delay in milliseconds of the Alert	|  `number` 	|


## toolbarProps

| Name 	|  Type 	|   Default	|  Description 	|  Values 	|
|------	|---	|---	|---	|---	|
|    showSearchBar  	|  boolean 	|  `true` 	|  Show or hide the search bar 	|  `true`, `false` 	|
|    showSwitchModeButtons  	|  boolean 	|  `true` 	|   Show or hide the view mode button group switcher	|  `true`, `false` 	|
|    showDatePicker  	|  boolean 	|  `true` 	|  Show or hide the date picker buttons 	|  `true`, `false` 	|


## Methods

| Method 	|  Params 	|  Type 	|  Description 	|  
|------	|---	|---	|---	|
|  `handleCellClick(event: Event, row: object, day: object)`    	|  `event: Event`, `row: object`, `day: object` 	|  Event 	|  Triggered when you click on a cell 	|
|  `handleEventClick(event: Event, item: object)`    	|  `event: Event`, `item: object` 	|  Event 	|  Triggered when you click on an event 	|
|  `handleEventsChange(item: object)`    	|  `item: object` 	|  Event 	|  Triggers when a data update occurs 	|
|  `handleAlertCloseButtonClicked(item: object)`    	|  `item: object` 	|  Event 	|  Triggers when clicking on the close button of the notification alert 	|



## 😁 Authors

- Muller Roufaou ([rouftom](http://github.com/rouftom))



## 🤔 FAQ

* __Where can I find more documentation?__

  This library is a marriage of [@mui](http://mui.com/getting-started/usage/) and a React setup created with [React](https://fr.reactjs.org/). Either one would be a great place to start!


## 🙇‍♂️ Extra

    Do you like this library ? Buy me a coffee or support me with a star on Github

<a href="https://www.buymeacoffee.com/Lnp9rkM" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 40px !important;width: 180px !important;" ></a>

* Btc address: `bc1qettgagenn9nc8ks7ghntjfme96yvvkfhntk774`

* Eth address: `0xB0413d8D0336E263e289A915c383e152155881E0`


## 🔥 Some features to add in next releases

- ✅ Week, day and timeline mode switch view

- 👉 Option menu

- 👉 Export events as PDF and CSV

- ✅ Internationalization

- 👉 Typescript support

- ✅ Display style customization


## License

### react-mui-scheduler

MIT License

Copyright (c) 2022 rouftom

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
