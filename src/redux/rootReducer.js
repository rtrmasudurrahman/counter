

// create root Reducer

import { combineReducers } from "redux";
import colorReducer from "./color/colorReducer";
import counterReducer from "./counter/counterReducer";
import foodReducer from "./foodReducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    color: colorReducer,
    food: foodReducer
})

export default rootReducer;