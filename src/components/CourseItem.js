import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import TaskItem from './TaskItem'
import dropDown from '../img/drop-down.png'
import dropRight from '../img/drop-right.png'

const CourseItem = props => {
    const [displayMode, setDisplayMode] = useState(true);
    const tasks = useSelector(state => state.tasks.filter(
        task => task.courseId === props.course.id
    ));

    return (
        <div className="courseItem">
            <div className="courseHeader">
                <button onClick={() => setDisplayMode(!displayMode)}>
                    <img 
                    src={displayMode ? dropDown : dropRight}
                    alt="img" />
                </button>
                { props.course.name }
            </div>
            { displayMode && 
             tasks.map(task => <TaskItem key={task.id} task={task} />)
            }
        </div>
    )
}

CourseItem.propTypes = {
    course: PropTypes.object.isRequired
}

export default CourseItem
