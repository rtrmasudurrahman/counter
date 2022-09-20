import { BLUE, GRAY, GREEN, RED, YELLOW } from "./actionType";
import { initialState } from "./initialState";

const colorReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case RED:
            return 'red';
        case YELLOW:
            return 'yellow';
        case BLUE:
            return 'blue';
        case GRAY:
            return 'gray';
        case GREEN:
            return 'green';
              
        default:
            return state;
    }
}

export default colorReducer;