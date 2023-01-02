import { configureStore } from "@reduxjs/toolkit";
import rocketReducer from './Rocket'

const store = configureStore({
    reducer: {rocketSlice: rocketReducer, }
})

export default store