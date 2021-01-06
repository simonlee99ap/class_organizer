import React, { Component } from 'react';
import date from 'date-and-time';

export default class Calendar extends Component {
    state = {
        currYear: 0,
        currMonth: 0
    }

    componentDidMount() {
        const now = new Date();
        this.setState( {currYear: now.getFullYear(), currMonth: now.getMonth()});
    }

    getDateHeader = () => {
        const currView = new Date(this.state.currYear, this.state.currMonth);
        return date.format(currView, "MMM YYYY");
    }

    decMonth = () => {
        let newMonth = this.state.currMonth;
        let newYear = this.state.currYear;
        if (this.state.currMonth === 0) {
            newMonth = 12;
            newYear--;
        }

        this.setState({ currYear: newYear, currMonth: newMonth - 1 });
    }

    incMonth = () => {
        let newMonth = this.state.currMonth;
        let newYear = this.state.currYear;
        if (this.state.currMonth === 11) {
            newMonth = -1;
            newYear++;
        }

        this.setState({ currYear: newYear, currMonth: newMonth + 1 });
    }

    render() {
        return (
            <div>
                <button onClick={ this.decMonth }>left</button>
                { this.getDateHeader() }
                <button onClick={ this.incMonth }>right</button>
            </div>
        )
    }
}
