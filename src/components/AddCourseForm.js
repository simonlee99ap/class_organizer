import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addCourse } from '../reducers/courseReducer'

const AddCourseForm = () => {
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
        <div>
            Course Name: 
            <input 
                type="text" 
                value={courseText}
                onChange={e => setCourseText(e.target.value)} />
            Course Color: 
            <input 
                type="text" 
                value={colorText}
                onChange={e => setColorText(e.target.value)} />
            <button
                onClick={handleSubmit}>submit</button>
        </div>
    )
}

export default AddCourseForm