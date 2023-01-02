import { createSlice } from "@reduxjs/toolkit";

const missionSlice = createSlice({
    name: 'Mission',
    initialState: {
        missions: []
    },
    reducers: {
        addMission(state, action) {
            const mission = action.payload
            state.missions.push(mission)
        },
        joinMission(state, action) {
            const id = action.payload
            state.missions.forEach((mission) => {
                if (mission.id === id) {
                    mission.joined = true
                }
            })
        },
        leaveMission(state, action) {
            const id = action.payload;
            state.missions.forEach((mission) => {
              if (mission.id === id) {
                mission.joined = false;
              }
            });
        }
    }
})

export const missionActions = missionSlice.actions

export default missionSlice.reducer