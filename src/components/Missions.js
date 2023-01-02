import React from 'react';
import { useSelector } from 'react-redux';

const Missions = () => {
        const missions = useSelector((state) => {
          return state.missionSlice.missions;
        });


    return (
        <div>
            
        </div>
    );
};

export default Missions;