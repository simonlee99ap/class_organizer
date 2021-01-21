import { LOAD_COURSES } from '../actions/types'
import axios from 'axios'

const initState = []

export default function courseReducer(state = initState, action) {
    switch (action.type) {
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