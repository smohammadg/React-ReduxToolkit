import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    count: 0
}

// slice / reducer logic
// what ever logic is required, 
// we have to write inside
const counterSlice = createSlice({
    name: 'counter', // slice name
    initialState: initialState, // initial state
    reducers: { // it have all actions of this reducer
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        incrementByValue: (state, action) => {
            state.count += action.payload;
        }
    }
})

// if we want to use the increment action, we have to export it
export const { increment, decrement, incrementByValue } = counterSlice.actions;

// here createSlice, has combined the reducers and actions
export default counterSlice.reducer;