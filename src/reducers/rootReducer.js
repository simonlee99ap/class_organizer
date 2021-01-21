import { combineReducers } from 'redux'

import taskReducer from './taskReducer'
import classReducer from './classReducer'

const rootReducer = combineReducers({
    tasks: taskReducer,
    classes: classReducer
})

export default rootReducer