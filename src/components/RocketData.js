import React from 'react';
import { useDispatch } from 'react-redux';
import { rocketActions } from '../store/Rocket';
import styles from '../sass/_rocketdata.module.scss'

const RocketData = (props) => {
    const dispatch = useDispatch()

    const { image, rocket_name, description, reserved, id} = props.rocket

    const addReservation = () => {
        dispatch(rocketActions.reserveRocket(id))
    }

    const removeReservation = () => {
      dispatch(rocketActions.cancelReservation(id));
    };

    return (
      <li className={styles.list}>
        <img src={image} alt="Rocket" className={styles["rocket-image"]} />
        <div>
          <h1 className={styles.name}>{rocket_name}</h1>
          {reserved ? (
            <>
              <span className={styles.span}>Reserved</span>
              <p className={styles.description}>{description}</p>
            </>
          ) : (
            <p className={styles.description}>{description}</p>
          )}
          {reserved ? (
            <button className={styles.cancel} onClick={removeReservation}>Cancel Reservation</button>
          ) : (
            <button className={styles.reserve} onClick={addReservation}>Reserve Rocket</button>
          )}
        </div>
      </li>
    );
};

export default RocketData;