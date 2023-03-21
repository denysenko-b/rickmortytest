import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    opened: false,
};

export const loginFormSlice = createSlice({
    name: "loginForm",
    initialState,
    reducers: {
        openLoginForm: (state) => {
            state.opened = true;
        },

        closeLoginForm: (state) => {
            state.opened = false;
        },
    },
});

// Action creators are generated for each case reducer function
export const { openLoginForm, closeLoginForm } = loginFormSlice.actions;

export default loginFormSlice.reducer;
