import React, { Component } from 'react'
import Calendar from './components/Calendar'
import CoursePanel from './components/CoursePanel'
import './App.css'

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Calendar />
        <CoursePanel />
      </div>
    )
  }
}

export default App
