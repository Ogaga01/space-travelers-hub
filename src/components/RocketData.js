import React from 'react';
import { useDispatch } from 'react-redux';
import { rocketActions } from '../store/Rocket';

const RocketData = (props) => {
    const dispatch = useDispatch()

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

    return (
        <li>
            
        </li>
    );
};

export default RocketData;