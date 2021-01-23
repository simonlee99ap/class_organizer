import React from 'react'
import { useSelector } from 'react-redux'
import Popup from 'reactjs-popup'

import CourseItem from './CourseItem'
import AddCourseForm from './AddCourseForm'
import AddTaskForm from './AddTaskForm'

const CoursePanel = () => {
    const courses = useSelector(state => state.courses)

    return (
        <div className="coursePanel">
            { courses.map((course) => <CourseItem key={course.id} course={course} />) }
            <Popup trigger={<button className="popupBtn"> + Add Course </button>} modal>
                {close => <AddCourseForm close={close}/>}
            </Popup>
            <Popup trigger={<button className="popupBtn"> + Add Task </button>} modal>
            {close => <AddTaskForm close={close}/>}
            </Popup>
        </div>
    )
}

export default CoursePanel
