import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../sass/_rocketslist.module.scss'

const MissionReservedList = () => {
    const missions = useSelector((state)=>{return state.missionSlice.missions})

    const joinedMissions = missions.filter((mission)=>{return mission.joined})

    return (
      <div className={styles["my-profile-item"]}>
        <h2 className={styles.mission}>My Missions</h2>
        {joinedMissions.length < 1 ? (
          <p className={styles.paragraph}>Be the first to join a mission</p>
        ) : (
          <table className={styles["my-profile-mission-table"]}>
            <tbody>
              {joinedMissions.map((mission, index) => {
                const count = index;
                return (
                  <tr key={count}>
                    <td className={styles["my-profil-mission"]}>
                      {mission.name}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    );
};

export default MissionReservedList;