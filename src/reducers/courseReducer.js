import { ADD_COURSE, LOAD_COURSES } from '../actions/types'
import axios from 'axios'

const initState = []

export default function courseReducer(state = initState, action) {
    switch (action.type) {
        case ADD_COURSE:
            return [...state, action.payload]
        case LOAD_COURSES:
            return action.payload
        default:
            return state
    }
}

export async function loadCourses(dispatch, getState) {
    const response = await axios.get("http://localhost:8080/courses/")
    dispatch({ type: LOAD_COURSES, payload: response.data._embedded.courseList })
}

export function addCourse(courseName, color) {
    return async function addCourseThunk(dispatch, getState) {
        const newCourse = { name: courseName, color: color }
        const response = await axios.post(
            "http://localhost:8080/courses/",
            newCourse
        )
        console.log(response)
        dispatch({ type: ADD_COURSE, payload: response.data })
    }
}
