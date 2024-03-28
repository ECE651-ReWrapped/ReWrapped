import { createSlice } from '@reduxjs/toolkit';

const userDetailsSlice = createSlice({
    name: 'currentUser',
    initialState: {
        userEmail: ''
    },
    reducers: {
        setUserEmail: (state, action) => {
            state.userEmail = action.payload;
        }
    },
});

export const userDetailsActions = userDetailsSlice.actions;
export default userDetailsSlice.reducer;