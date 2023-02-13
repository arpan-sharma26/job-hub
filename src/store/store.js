import { configureStore } from "@reduxjs/toolkit";

import slice from "../slices/addXP-slice";

const store = configureStore({
    reducer: {
        addXP: slice.reducer
    }
});

export default store;