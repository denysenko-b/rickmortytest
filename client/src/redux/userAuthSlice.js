import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loggedOn: false,
    name: "",
    photo: null,
    liked: []
};

export const userAuthSlice = createSlice({
    name: "userAuth",
    initialState: {
        ...initialState,
    },
    reducers: {
        login: (state, action) => {
            const {name, photo, liked} = action.payload;

            state.name = name;
            state.photo = photo;
            state.loggedOn = true;
            state.liked = liked;
        },
        logout: (state) => {
            state.name = '';
            state.photo = null;
            state.liked = [];
            state.loggedOn = false;
        }
    },
});

// Action creators are generated for each case reducer function
export const { login, logout } = userAuthSlice.actions;

export default userAuthSlice.reducer;
