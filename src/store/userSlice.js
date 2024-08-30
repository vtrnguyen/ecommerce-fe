import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userInfor: {},
    },
    reducers: {
        fetchDataSuccess: (state, action) => {
            state.userInfor = action.payload.userInfor;
        },
        fetchDataFail: (state) => {
            state.userInfor = {};
        },
    }
})

export const { fetchDataSuccess, fetchDataFail } = userSlice.actions;
export default userSlice.reducer;
