import React, { Component } from 'react';
import CalendarDate from './CalendarDate';
import date from 'date-and-time';
import './Calendar.css';

const calendarViewDates = 42;
const numRows = 6;
const daysInWeek = 7;
const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currYear: 0,
            currMonth: 0,
            dates: []
        };

        this.decMonth = this.decMonth.bind(this);
        this.incMonth = this.incMonth.bind(this);
    }

    componentDidMount() {
        const now = new Date();
        this.setState( {currYear: now.getFullYear(), currMonth: now.getMonth()}, this.updateDates);
    }

    getDateHeader() {
        const currView = new Date(this.state.currYear, this.state.currMonth);
        return date.format(currView, "MMM YYYY");
    }

    decMonth() {
        var newMonth = this.state.currMonth;
        var newYear = this.state.currYear;
        if (this.state.currMonth === 0) {
            newMonth = 12;
            newYear--;
        }

        this.setState({ currYear: newYear, currMonth: newMonth - 1 }, this.updateDates);
        this.updateDates();
    }

    incMonth() {
        var newMonth = this.state.currMonth;
        var newYear = this.state.currYear;
        if (this.state.currMonth === 11) {
            newMonth = -1;
            newYear++;
        }

        this.setState({ currYear: newYear, currMonth: newMonth + 1 }, this.updateDates);
    }

    updateDates() {
        var date = new Date(this.state.currYear, this.state.currMonth, 1);
        // closest sunday
        while (date.getDay() !== 0) {
            date.setDate(date.getDate() - 1);
        }

        var newDates = [];
        for (var i = 0; i < calendarViewDates; i++) {
            newDates.push(new Date(date));
            date.setDate(date.getDate() + 1);
        }

        this.setState({ dates: newDates });
    }

    renderCalendarBody() {
        if (this.state.dates.length === 0) {
            return (null);
        }

        var rows = [];
        for (var week = 0; week < numRows; week++) {
            var days = [];
            for (var day = 0; day < daysInWeek; day++) {
                days.push(this.state.dates[week*daysInWeek+day]);
            }

            rows.push(days);
        }

        return (<table>
            <tbody>
                { rows.map((row) => 
                <tr key={row[0].toString()}>
                    { row.map((date) => ( 
                    <td key={date.toString()}>
                        <CalendarDate key={date.toString()} date={date}/>
                    </td> )) }
                </tr> )}
            </tbody>
        </table>);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <button onClick={ this.decMonth }>left</button>
                    { this.getDateHeader() }
                    <button onClick={ this.incMonth }>right</button>
                </div>
                <div className="row">
                    { dayNames }
                </div>
                <div className="row">
                    { this.renderCalendarBody() }
                </div>
            </div>
        )
    }
}
