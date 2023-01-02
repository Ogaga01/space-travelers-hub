import React from 'react';
import MissionReservedList from './MissionReservedList';
import RocketReservedList from './RocketReservedList';
import styles from '../sass/_profile.module.scss'

const Profile = () => {
    return (
        <div className={styles.profile}>
            <RocketReservedList />
            <MissionReservedList/>
        </div>
    );
};

export default Profile;