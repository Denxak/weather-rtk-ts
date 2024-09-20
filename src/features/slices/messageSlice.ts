import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
    name: 'message',
    initialState: 'Enter city name',
    reducers: {
        putMessege: (_state, action) => action.payload,
    }
})

export const { putMessege } = messageSlice.actions;
export default messageSlice.reducer;
