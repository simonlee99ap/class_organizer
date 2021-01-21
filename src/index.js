import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './App'
import store from './store'
import { loadTasks } from './reducers/taskReducer'
import { loadCourses } from './reducers/courseReducer'

store.dispatch(loadTasks)
store.dispatch(loadCourses)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
