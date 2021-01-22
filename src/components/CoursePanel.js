import React from 'react'
import { useSelector } from 'react-redux'
import Popup from 'reactjs-popup'

import CourseItem from './CourseItem'
import AddCourseForm from './AddCourseForm'
import AddTaskForm from './AddTaskForm'

const CoursePanel = () => {
    const courses = useSelector(state => state.courses)

    return (
        <div>
            { courses.map((course) => <CourseItem key={course.id} course={course} />) }
            <Popup trigger={<button> + Add Course </button>} modal>
                <AddCourseForm />
            </Popup>
            <Popup trigger={<button> + Add Task </button>} modal>
                <AddTaskForm />
            </Popup>
        </div>
    )
}

export default CoursePanel
