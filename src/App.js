import React, { Component } from 'react'
import Calendar from './components/Calendar'
import ClassPanel from './components/ClassPanel'
import './App.css'

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Calendar />
        <ClassPanel />
      </div>
    )
  }
}

export default App
