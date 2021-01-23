import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import date from 'date-and-time'

import TaskItem from './TaskItem'

const CalendarDate = props => {
    const tasks = useSelector(state => state.tasks.filter(
        task => task.date === date.format(props.date, "MMM DD YYYY")
    ))

    return (
        <div className="calendarDate">
            <div className="dateNumber">{ props.date.getDate() }</div>
            <div className="tasksContainer">
                { tasks.map(task => <TaskItem key={task.id} task={task}/>) }
            </div>
        </div>
    )
}

CalendarDate.propTypes = {
    date: PropTypes.object.isRequired
}

export default CalendarDate
