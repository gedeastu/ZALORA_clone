import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    conditionSticky: false,
    scrollPosition: 0
}
export const conditionSlice = createSlice({
    name: 'condition',
    initialState,
    reducers: {
        toSticky : (state) => {
            state.conditionSticky = !state.conditionSticky
        },
        toFixed : (state) => {
            state.conditionSticky = state.conditionSticky
        },
        toValue : (state,action)=>{
            state.scrollPosition = action.payload.scrollPosition
        }
    },
})
export const { toSticky, toValue, toFixed } = conditionSlice.actions
export default conditionSlice.reducer