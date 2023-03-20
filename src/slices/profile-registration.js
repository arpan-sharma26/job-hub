import { createSlice } from "@reduxjs/toolkit";

const registrationSlice = createSlice({
    name: "register",
    initialState: {
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        skills: [],
        xp: []
    },
    reducers: {
        registerUser(state, action){
            let key = Object.keys(action.payload)[0];
            if(key === "skills"){
                state[key].push(action.payload[key]);
            }else{
                state[key] = action.payload[key];
            }
            console.log(state[key][0]);
        },
        removeSkills(state, action){
            let key = Object.keys(action.payload)[0];
            state[key].splice(action.payload[key], 1);
            console.log(state[key][0]);
        }
    }
});

export const registrationActions = registrationSlice.actions;
export default registrationSlice;