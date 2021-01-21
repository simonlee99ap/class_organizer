import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import TaskItem from './TaskItem'

const ClassItem = props => {
    const [displayMode, setDisplayMode] = useState(true);
    const tasks = useSelector(state => state.tasks.filter(
        task => task.classId === props.classObj.id
    ));

    return (
        <div>
            <button onClick={() => setDisplayMode(!displayMode)}>btn</button>
            { props.classObj.name }
            { displayMode && 
             tasks.map(task => <TaskItem task={task} />)
            }
        </div>
    )
}

ClassItem.propTypes = {
    classObj: PropTypes.object.isRequired
}

export default ClassItem
