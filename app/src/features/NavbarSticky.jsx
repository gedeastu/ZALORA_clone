import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    'height':100,
}
const scrollScreen = createSlice({
    name: 'stickyScroll',
    initialState,
    reducers:{
        stickyScroll: (state) => {
            state.height = window.screenY
            console.log(state.height)
            window.addEventListener('scroll',state.height)
        },
    },
})
export const {stickyScroll} = scrollScreen.actions;
export default scrollScreen.reducer;