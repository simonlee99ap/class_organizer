import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import TaskItem from './TaskItem'

const CourseItem = props => {
    const [displayMode, setDisplayMode] = useState(true);
    const tasks = useSelector(state => state.tasks.filter(
        task => task.courseId === props.course.id
    ));

    return (
        <div>
            <button onClick={() => setDisplayMode(!displayMode)}>btn</button>
            { props.course.name }
            { displayMode && 
             tasks.map(task => <TaskItem task={task} />)
            }
        </div>
    )
}

CourseItem.propTypes = {
    course: PropTypes.object.isRequired
}

export default CourseItem
