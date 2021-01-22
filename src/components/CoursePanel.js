import React from 'react'
import { useSelector } from 'react-redux'
import Popup from 'reactjs-popup'

import CourseItem from './CourseItem'
import AddCourseForm from './AddCourseForm'

const CoursePanel = () => {
    const courses = useSelector(state => state.courses)

    return (
        <div>
            { courses.map((course) => <CourseItem key={course.id} course={course} />) }
            <Popup trigger={<button> + Add Course </button>} modal>
                <AddCourseForm />
            </Popup>
        </div>
    )
}

export default CoursePanel
