import React from 'react';
import { useDispatch } from 'react-redux';
import { rocketActions } from '../store/Rocket';
import styles from '../sass/_rocketdata.module.scss'

const RocketData = (props) => {
    const dispatch = useDispatch()

    const { image, name, description, reserved, id} = props.rocket

    const fetchRocketData = async () => {
        const response = await fetch("https://api.spacexdata.com/v3/rockets");
        const data = await response.json()
        
        data.forEach((el) => {
            const rocket = {
                id: el.id,
                rocket_name: el.name,
                description: el.description,
                image: el.flickr_images[0],
                reserved: false,
            }

            dispatch(rocketActions.addRocket(rocket))
        })
    }
    fetchRocketData()

    const addReservation = () => {
        dispatch(rocketActions.reserveRocket(id))
    }

    const removeReservation = () => {
      dispatch(rocketActions.cancelReservation(id));
    };

    return (
      <li>
        <img src={image} alt="Rocket" className={styles["rocket-image"]} />
        <div>
          <h1 className={styles.name}>{name}</h1>
          {reserved ? (
            <>
              <span className="span">Reserved</span>{" "}
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