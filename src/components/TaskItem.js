import React from 'react'
import PropTypes from 'prop-types'

const TaskItem = props => {
    return (
        <div>
            { props.task.date } { props.task.name }
        </div>
    )
}

TaskItem.propTypes = {
    task: PropTypes.object.isRequired
}

export default TaskItem
