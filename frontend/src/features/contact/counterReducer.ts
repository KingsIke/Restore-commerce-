export type CounterState = {
    data: number;
};
export const initialState: CounterState = {
    data: 41,
};

export  function INCREMENT(amount = 1){
    return{
        type:"INCREMENT",
        payload: amount
    }
}
export function DECREMENT(amount = 1){
    return{
        type:"DECREMENT",
        payload: amount
    }
}

export default function counterReducer(
    state  = initialState, action: { type: string, payload: number}
){
    switch(action.type){
        case "INCREMENT":
            return {
                ...state,
                data: state.data + action.payload
            }
        case "DECREMENT": 
            return {
                ...state,
                data: state.data - action.payload
            }
        default:
            return state;
    }
 
}