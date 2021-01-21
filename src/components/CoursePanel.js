import React from 'react'
import { useSelector } from "react-redux";
import CourseItem from "./CourseItem";

const CoursePanel = () => {
    const courses = useSelector(state => state.courses);

    return (
        <div>
            { courses.map((course) => <CourseItem course={course} />) }
        </div>
    )
}

export default CoursePanel
