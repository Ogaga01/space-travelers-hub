import { createSlice } from "@reduxjs/toolkit";

const rocketSlice = createSlice({
    name: 'Rockets',
    initialState: {
        rockets: []
    },
    reducers: {
        addRocket(state, action) {
            const rocket = action.payload
            state.rockets.push(rocket)
        },
        reserveRocket(state, action) {
            const id = action.payload
            state.rockets.forEach((rocket) => {
                if (rocket.id === id) {
                rocket.reserved = true
            }})
        },
        cancelReservation(state, action) {
            const id = action.payload;
            state.rockets.forEach((rocket) => {
              if (rocket.id === id) {
                rocket.reserved = false;
              }
            });
        }
    }
})

export const rocketActions = rocketSlice.actions

export default rocketSlice.reducer