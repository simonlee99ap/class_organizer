import React from 'react'
import PropTypes from 'prop-types'
import Popup from 'reactjs-popup'

import TaskItemModifyForm from './TaskItemModifyForm'

const TaskItem = props => {
    return (
        <Popup trigger={<div className="taskItem">
            { props.task.name }
        </div>} modal>
            {close => <TaskItemModifyForm close={close} task={props.task}/>}
        </Popup>
    )
}

TaskItem.propTypes = {
    task: PropTypes.object.isRequired
}

export default TaskItem
