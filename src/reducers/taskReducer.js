import { NEW_TASK, DELETE_TASK, MODIFY_TASK } from "../actions/types";

const initState = [];

export default function taskReducer(state = initState, action) {
    switch (action.type) {
        case NEW_TASK:
            return [...state, action.payload];
        case DELETE_TASK:
            return state.tasks.filter(task => {
                    return task.id !== action.payload;
                });
        case MODIFY_TASK:
            return state.tasks.map(task => {
                    if (task.id === action.payload.id) return action.payload;
                    else return task;
                });
        default:
            return state;
    }
}