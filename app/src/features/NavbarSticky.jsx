import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    'heightCondition':false,
}
const scrollScreen = createSlice({
    name: 'stickyScroll',
    initialState,
    reducers:{
        stickyScroll: (state,action) => {
            state.heightCondition = action.payload.heightCondition
        },
    },
})
export const {stickyScroll} = scrollScreen.actions;
export default scrollScreen.reducer;