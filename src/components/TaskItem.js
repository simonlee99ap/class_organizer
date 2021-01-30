import React from 'react'
import PropTypes from 'prop-types'
import Popup from 'reactjs-popup'

import TaskItemModifyForm from './TaskItemModifyForm'

const TaskItem = props => {
    return (
        <Popup trigger={<div className="taskItem">
            <div className="taskItemText" finished={props.task.finished.toString()}>{ props.task.name }</div>
        </div>} modal>
            {close => <TaskItemModifyForm close={close} task={props.task}/>}
        </Popup>
    )
}

TaskItem.propTypes = {
    task: PropTypes.object.isRequired
}

export default TaskItem
