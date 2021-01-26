import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import DatePicker from 'react-datepicker'
import PropTypes from 'prop-types'
import date from 'date-and-time'

import { modifyTask } from '../reducers/taskReducer'
import closeImg from '../img/close.png'

const TaskItemModifyForm = props => {
    const dispatch = useDispatch()
    const courses = useSelector(state => state.courses)
    const taskItem = props.task

    const [taskName, setTaskName] = useState(taskItem.name)
    const [courseId, setCourseId] = useState(taskItem.courseId)
    const [dueDate, setDueDate] = useState(date.parse(taskItem.date, "MMM DD YYYY"))

    const handleSubmit = (e) => {
        e.preventDefault()
        const modifyTaskThunk = modifyTask(taskName, taskItem.finished, courseId, date.format(dueDate, "MMM DD YYYY"), taskItem.id)
        dispatch(modifyTaskThunk)
        props.close()
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="formHeader">
                <div>Modify the task</div>
                <button type="button" onClick={props.close}>
                    <img src={closeImg} alt="close" />
                </button>
            </div>
            <label>
                Task name
                <input
                    type="text"
                    value={taskName}
                    onChange={e => setTaskName(e.target.value)} />
            </label>
            <label>
                Course
                <select value={courseId} onChange={e => setCourseId(e.target.value)}>
                    { courses.map(course => 
                    <option key={course.id} value={course.id}>{course.name}</option>) }
                </select>
            </label>
            <label>
                Due date
                <br></br>
                <DatePicker selected={dueDate} onChange={date => setDueDate(date)} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}

TaskItemModifyForm.propTypes = {
    task: PropTypes.object.isRequired,
    close: PropTypes.func.isRequired
}

export default TaskItemModifyForm
