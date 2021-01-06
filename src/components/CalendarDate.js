import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class CalendarDate extends Component {
    render() {
        return (
            <div>
                { this.props.date.getDate() }
            </div>
        )
    }
}

CalendarDate.propTypes = {
    date: PropTypes.object.isRequired
}
