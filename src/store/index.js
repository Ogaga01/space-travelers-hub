import { configureStore } from "@reduxjs/toolkit";
import rocketReducer from './Rocket'
import missionReducer from './Mission'

const store = configureStore({
    reducer: {rocketSlice: rocketReducer, missionSlice: missionReducer}
})

export default store