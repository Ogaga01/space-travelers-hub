import React from "react";
import { useSelector } from "react-redux";
import RocketData from "./RocketData";

const Rockets = () => {
  const rockets = useSelector((state) => {
    return state.rocketSlice.rockets;
  });

    return <ul>
        {rockets.map((rocket) => {
            return <RocketData key={rocket.id} rocket={rocket} />
        })}
    </ul>;
};

export default Rockets;
