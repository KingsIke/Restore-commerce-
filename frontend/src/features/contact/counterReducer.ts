export type CounterState = {
    data: number;
};
export const initialState: CounterState = {
    data: 41,
};

export default function counterReducer(
    state  = initialState
){
    return state;
}