
<h1 align="center">📅 React Material Scheduler</h1>
<p align="center">developed with <a target="_blank" href="https://mui.com">@mui v5</a> </p>

<p align="center">
  <img alt="MIT license" src="https://img.shields.io/badge/license-MIT-blue.svg">
  <img alt="GitHub release (latest by date)" src="https://img.shields.io/github/v/release/rouftom/react-mui-scheduler">
  <img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/rouftom/react-mui-scheduler">
  <img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/rouftom/react-mui-scheduler">
  <img alt="Snyk Vulnerabilities for GitHub Repo" src="https://img.shields.io/snyk/vulnerabilities/github/rouftom/react-mui-scheduler">
</p>

---

React mui scheduler is a react component based on @mui v5 that allows you to manage data in a calendar.

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
  const [state, setState] = useState({
    options: {
      transitionMode: "zoom", // or fade
      startWeekOn: "Mon",     // or Sun
      defaultMode: "week",    // or month
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
      date: "2021-09-28",
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
      date: "2021-09-29",
      createdAt: new Date(),
      createdBy: "Kristina Mayer"
    },
    {
      id: "event-3",
      label: "Medical consultation",
      groupLabel: "Dr Menlendez Hary",
      user: "Dr Menlendez Hary",
      color: "#263686",
      startHour: "13 AM",
      endHour: "14 AM",
      date: "2021-09-30",
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
      date: "2021-10-01",
      createdAt: new Date(),
      createdBy: "Kristina Mayer"
    }
  ]
  
  const handleCellClick = (event, row, day) => {
    // Do something...
  }
  
  const handleEventClick = (event, task) => {
    // Do something...
  }
  
  const handleEventsChange = (item) => {
    // Do something...
  }
  
  const handleAlertCloseButtonClicked = (item) => {
    // Do something...
    setState({
      ...state, 
      alertProps: {...state.alertProps, open: false}
    })
  }
  
  return (
    <Scheduler
      events={events}
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


## 😁 Authors

- Muller Roufaou ([rouftom](http://github.com/rouftom))



## 🤔 FAQ

* __Where can I find more documentation?__

  This library is a marriage of [@mui](http://mui.com/getting-started/usage/) and a React setup created with [React](https://fr.reactjs.org/). Either one would be a great place to start!


## 🙇‍♂️ Extra

    Do you like this library ? Buy me a coffee

* Btc address: `bc1qettgagenn9nc8ks7ghntjfme96yvvkfhntk774`

* Eth address: `0xB0413d8D0336E263e289A915c383e152155881E0`


## 🔥 Some features to add in next releases

- ✅ Week, day and timeline mode switch view
  
- 👉 Option menu 

- 👉 Export events as PDF and CSV

- 👉 Internationalization

- 👉 Typescript support

- 👉 Theme customization


## License

### react-mui-scheduler

MIT License

Copyright (c) 2021 rouftom

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
