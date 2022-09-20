
const initialState = 'Alo';

// create reducer

const foodReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'FOOD_CHANGE':
            return payload;
    
        default:
            return state;
    }
}

export default foodReducer;