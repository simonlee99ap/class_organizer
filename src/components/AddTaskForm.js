import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import DatePicker from 'react-datepicker'
import date from 'date-and-time'

import { addTask } from '../reducers/taskReducer'
import closeImg from '../img/close.png'

const AddTaskForm = (props) => {
    const dispatch = useDispatch()
    const courses = useSelector(state => state.courses)

    const [taskName, setTaskName] = useState("")
    // TODO: add some default class and prevent submission when that default class
    // is selected
    const [courseId, setCourseId] = useState(courses[0].id)
    const [dueDate, setDueDate] = useState(new Date())

    const handleSubmit = (e) => {
        e.preventDefault()
        const addTaskThunk = addTask(taskName, courseId, date.format(dueDate, "MMM DD YYYY"))
        dispatch(addTaskThunk)
        setTaskName("")
        setCourseId(0)
        setDueDate(new Date())
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="formHeader">
                <div>Add a new task</div>
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

export default AddTaskForm
