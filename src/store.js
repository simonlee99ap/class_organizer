import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";

const initState = {
    tasks: [],
    classes: []
};

const store = createStore(
    rootReducer, 
    initState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;