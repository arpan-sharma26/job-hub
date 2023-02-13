import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: "addXP",
    initialState : {ifAddXP: 0},
    reducers: {
        increment: (state, action) => {
            state.ifAddXP++;
        }
    }
});

export const sliceActions = slice.actions; 
export default slice;