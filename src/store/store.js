import { configureStore } from "@reduxjs/toolkit";
import slice from "../slices/addXP-slice";
import sliceSkills from "../slices/skills-slice";
import registrationSlice from "../slices/profile-registration";

const store = configureStore({
    reducer: {
        addXP: slice.reducer,
        skills: sliceSkills.reducer,
        register: registrationSlice.reducer
    }
});

export default store;