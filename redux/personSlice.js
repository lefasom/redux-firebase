import { createSlice } from "@reduxjs/toolkit";

export const personSlice = createSlice({
    name: 'person',
    initialState:{list:[]},
    reducers: {
        currentPerson: (state, action) => {
            state.list = action.payload
        },
    }
})
   

export const {
    currentPerson,
} = personSlice.actions

export default personSlice.reducer

