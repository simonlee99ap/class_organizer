import React, { Component } from 'react';
import Calendar from './components/Calendar';
import './App.css';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Calendar />
      </div>
    )
  }
}

export default App
