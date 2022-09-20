
import { DECREMENT, INCREMENT } from "./actionType"

//make 
export const makeIncrement = () => {
    return {
        type : INCREMENT
    }
}

export const makeDecrement = () => {
    return {
        type : DECREMENT
    }
}
