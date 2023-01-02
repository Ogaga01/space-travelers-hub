import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRocketData } from "../store/fetch-actions";
import RocketData from "./RocketData";

const Rockets = () => {
  const rockets = useSelector((state) => {
    return state.rocketSlice.rockets;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRocketData());
  }, [dispatch]);

    return <ul>
        {rockets.map((rocket) => {
            return <RocketData key={rocket.id} rocket={rocket} />
        })}
    </ul>;
};

export default Rockets;
