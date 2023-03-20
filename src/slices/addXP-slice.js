import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: "addXP",
    initialState : {ifAddXP: 0, counterArray: []},
    reducers: {
        increment: (state, action) => {
            state.ifAddXP++;
            state.counterArray.push(action.payload+1);
        },
        decrement: (state, action) => {
            let index = parseInt(action.payload);
            state.counterArray = state.counterArray.filter(num => num !== index);
        }
    }
});

export const sliceActions = slice.actions; 
export default slice;