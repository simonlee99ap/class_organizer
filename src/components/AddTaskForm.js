import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import DatePicker from 'react-datepicker'
import date from 'date-and-time'

import { addTask } from '../reducers/taskReducer'

const AddTaskForm = () => {
    const dispatch = useDispatch()
    const courses = useSelector(state => state.courses)

    const [taskName, setTaskName] = useState("")
    const [courseId, setCourseId] = useState(0)
    const [dueDate, setDueDate] = useState(new Date())

    const handleSubmit = () => {
        const addTaskThunk = addTask(taskName, courseId, date.format(dueDate, "MMM DD YYYY"))
        dispatch(addTaskThunk)
        setTaskName("")
        setCourseId(0)
        setDueDate(new Date())
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Task:
                <input
                    type="text"
                    value={taskName}
                    onChange={e => setTaskName(e.target.value)} />
            </label>
            <label>
                Course:
                <select value={courseId} onChange={e => setCourseId(e.target.value)}>
                    { courses.map(course => 
                    <option key={course.id} value={course.id}>{course.name}</option>) }
                </select>
            </label>
            <label>
                Date:
                <DatePicker selected={dueDate} onChange={date => setDueDate(date)} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default AddTaskForm
