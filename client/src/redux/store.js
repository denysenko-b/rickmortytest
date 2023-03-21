import { configureStore } from "@reduxjs/toolkit";
import loginFormSlice from "./loginFormSlice";
import userAuthSlice from "./userAuthSlice";

export const store = configureStore({
    reducer: {
        loginForm: loginFormSlice,
        userAuth: userAuthSlice
    },
});
