



<h1 align="center">React Material Scheduler</h1>
<p align="center">developed with <a target="_blank" href="https://mui.com">@mui</a> </p>

<p align="center">
  <img alt="MIT license" src="https://img.shields.io/badge/license-MIT-blue.svg">
  <img alt="Travis (.com)" src="https://img.shields.io/travis/com/rouftom/react-mui-scheduler">
  <img alt="GitHub release (latest by date)" src="https://img.shields.io/github/v/release/rouftom/react-mui-scheduler">
  <img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/rouftom/react-mui-scheduler">
  <img alt="Snyk Vulnerabilities for GitHub Repo" src="https://img.shields.io/snyk/vulnerabilities/github/rouftom/react-mui-scheduler">
</p>

---

React mui scheduler is a react component based on @mui v5 that allows you to manage data in a calendar.

## Installation
```nodejs
  npm install react-mui-scheduler
```

## Usage
```javascript
 import React from 'react'
 import ReactDOM from 'react-dom'
 import Scheduler from "react-mui-scheduler"
 
  function App() {
    const events = [
      {
        id: `event-1`,
        label: "Consultation médicale",
        title: "Dr Shaun Murphy",
        color: "#f28f6a",
        startHour: "9 AM",
        endHour: "10 AM",
        date: "2021-09-09",
        createdAt: new Date(),
        createdBy: "Kristina Mayer"
      },
      {
        id: `event-2`,
        label: "Consultation médicale",
        title: "Dr Claire Brown",
        color: "#099ce5",
        startHour: "9 AM",
        endHour: "10 AM",
        date: "2021-09-09",
        createdAt: new Date(),
        createdBy: "Kristina Mayer"
      },
      {
        id: `event-3`,
        label: "Consultation médicale",
        title: "Dr Menlendez Hary",
        color: "#263686",
        startHour: "13 AM",
        endHour: "14 AM",
        date: "2021-09-12",
        createdAt: new Date(),
        createdBy: "Kristina Mayer"
      },
    ]
    
    const onCellClick = (event, row, day) => {
      // Do something...
    }
    
    const onEventClick = (event, task) => {
      // Do something...
    }
    
    const onEventsChange = (item) => {
      // Do something...
    }
  
    return (
      <Scheduler
        events={events}
        openAlert={false}
        alertMessage={'This is a scheduler alert'}
        alertProps={{color: 'info', severity: 'success'}}
        onEventsChange={onEventsChange}
        onCellClick={onCellClick}
        onTaskClick={onEventClick}
      />
    )
  }

  ReactDOM.render(<App />, document.querySelector('#app'))
```


##Authors

- Muller Roufaou ([rouftom](http://github.com/rouftom))



## FAQ

* __How do I use this with the @mui?__

  Just install [@mui](http://mui.com) in your project and you are done!

* __Where can I find more documentation?__

  This library is a marriage of [@mui](http://mui.com/getting-started/usage/) and a React setup created with [React](https://fr.reactjs.org/). Either one would be a great place to start!


## Extra

    😊 Do you like this library ? Buy me a coffee

* Btc address: `1A2VNHSLGDyYsKWniJBe8cCqYWC52NvNZx`

* Eth address: `0xFe444a01D9494Ec04f61797e15193C8016D666A5`


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
