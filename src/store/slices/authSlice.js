import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    currentUser: {},
    loading: false,
    error: false,
};
const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        // builder.addCase(getTodos.pending, (state) => {
        //     state.loading = true;
        // });
    },
});
const authReducer = authSlice.reducer;

export default authReducer;
