import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        user: null,
        token: null,
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.token = action.payload.accessToken;
        },
        loginFail: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.token = null;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.token = null;
        },
        refreshToken: (state, action) => {
            state.token = action.payload.newAccessToken;
        },
    }
})

export const { loginSuccess, loginFail, logout, refreshToken } = authSlice.actions;
export default authSlice.reducer;
