import { NEW_TASK, DELETE_TASK, MODIFY_TASK, LOAD_TASKS } from '../actions/types'
import axios from 'axios'

const initState = []

export default function taskReducer(state = initState, action) {
    switch (action.type) {
        case NEW_TASK:
            return [...state, action.payload]
        case DELETE_TASK:
            return state.tasks.filter(task => {
                    return task.id !== action.payload
                })
        case MODIFY_TASK:
            return state.tasks.map(task => {
                    if (task.id === action.payload.id) return action.payload
                    else return task
                })
        case LOAD_TASKS:
            return action.payload
        default:
            return state
    }
}

export async function loadTasks(dispatch, getState) {
    const response = await axios.get("http://localhost:8080/tasks/")
    dispatch({ type: LOAD_TASKS, payload: response.data._embedded.taskList })
}

export function addTask(taskName, courseId, dueDate) {
    return async function addTaskThunk(dispatch, getState) {
        const newTask = { name: taskName, finished: false, courseId: courseId, date: dueDate }
        const response = await axios.post(
            "http://localhost:8080/tasks/",
            newTask
        )
        console.log(response)
        dispatch({ type: NEW_TASK, payload: newTask })
    }
}
