import { createSlice } from "@reduxjs/toolkit";

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

// ..................USING REACTTOOLKIT.....................
export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state, action) => {
            state.data += action.payload
        },
        decrement: (state, action) => {
            state.data -= action.payload
        }
    }
})
export const {increment, decrement} = counterSlice.actions