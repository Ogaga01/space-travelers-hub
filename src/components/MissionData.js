import React from 'react';
import { useDispatch } from 'react-redux';
import { missionActions } from '../store/Mission';
import styles from '../sass/_missiondata.module.scss'

const MissionData = (props) => {
    const dispatch = useDispatch()

    const { id, name, description, joined } = props.mission
    
    const joinMission = () => {
        dispatch(missionActions.joinMission(id))
    }

    const leaveMission = () => {
        dispatch(missionActions.leaveMission(id))
    }

    return (
        <tr>
      <td className={styles.name}><b>{name}</b></td>
      <td className={styles.description}>{description}</td>
            <td className={styles.member}>{!joined && <p className={styles['not-active']}>Not a member</p>}
            {joined && <p className={styles.active}>Active Member</p>}
            </td>
      <td className={styles.joined}>
                {joined && <button className={styles.leave} onClick={leaveMission}>Leave Mission</button>}
                {!joined && <button className={styles.join} onClick={joinMission}>Join Mission</button>}
      </td>
    </tr>
  );
};

export default MissionData;