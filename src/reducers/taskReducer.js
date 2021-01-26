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
        
        dispatch({ type: NEW_TASK, payload: response.data })
    }
}

// export function modifyTask(taskName, done, courseId, dueDate, id) {
//     return async function modifyTaskThunk(dispatch, getState) {
//         const modifiedTask = { name: taskName, finished: done, courseId: courseId, date: dueDate }
//         const response = await axios.put(
//             "http://localhost:8080/tasks/" + id,
//             modifiedTask
//         )
//         console.log(response)
//         dispatch({ type: MODIFY_TASK, payload: modifiedTask })
//     }
// }
