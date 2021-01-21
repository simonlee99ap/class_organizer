import { combineReducers } from 'redux'

import taskReducer from './taskReducer'
import courseReducer from './courseReducer'

const rootReducer = combineReducers({
    tasks: taskReducer,
    courses: courseReducer
})

export default rootReducer