import { configureStore } from '@reduxjs/toolkit'
import  conditionSlice  from '../features/NavbarSticky'
export const store = configureStore({
  reducer: {
        condition : conditionSlice,
  },
})