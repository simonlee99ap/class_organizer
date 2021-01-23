import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import 'react-datepicker/dist/react-datepicker.css'

import { addCourse } from '../reducers/courseReducer'
import closeImg from '../img/close.png'

const AddCourseForm = (props) => {
    const dispatch = useDispatch()

    const [courseText, setCourseText] = useState("")
    const [colorText, setColorText] = useState("")

    const handleSubmit = () => {
        const addCourseThunk = addCourse(courseText, colorText)
        dispatch(addCourseThunk)
        setCourseText("")
        setColorText("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="formHeader">
                <div>Add a new course</div>
                <button type="button" onClick={props.close}>
                    <img src={closeImg} alt="close" />
                </button>
            </div>
            <label>
                Course name 
                <input 
                    type="text" 
                    value={courseText}
                    onChange={e => setCourseText(e.target.value)} />
            </label>
            <label>
                Color
                <input 
                    type="text" 
                    value={colorText}
                    onChange={e => setColorText(e.target.value)} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default AddCourseForm