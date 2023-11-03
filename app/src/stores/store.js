import {configureStore} from '@reduxjs/toolkit';
import { stickyScroll } from '../features/NavbarSticky';
export const store = configureStore({
    reducer: {
        stickyScroll : stickyScroll
    }
})