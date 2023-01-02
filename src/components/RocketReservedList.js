import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../sass/_rocketslist.module.scss'

const RocketReservedList = () => {
    const rockets = useSelector((state) => { return state.rocketSlice.rockets })
    
    const reservedRockets = rockets.filter((rocket)=>{return rocket.reserved})

    return (
      <div className={styles["my-profile-item"]}>
        <h2 className={styles.mission}>My Rockets</h2>
        {reservedRockets.length < 1 ? (
          <p className={styles.paragraph}>Reserve a rocket</p>
        ) : (
          <table className={styles["my-profile-mission-table"]}>
            <tbody>
              {reservedRockets.map((rocket, index) => (
                <tr key={index}>
                  <td className={styles["my-profil-mission"]}>
                    {rocket.rocket_name}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
};

export default RocketReservedList;