import React from 'react';
import { useSelector } from 'react-redux';
import MissionData from './MissionData';
import styles from '../sass/_missions.module.scss'

const Missions = () => {
        const missions = useSelector((state) => {
          return state.missionSlice.missions;
        });


    return (
      <table className={styles['mission-table']}>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
                {missions.map((mission) => {
              return <MissionData key={mission.id} mission={mission}/>
          })}
        </tbody>
      </table>
    );
};

export default Missions;