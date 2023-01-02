import React from 'react';
import { useSelector } from 'react-redux';

const RocketReservedList = () => {
    const rockets = useSelector((state) => { return state.rocketSlice.rockets })
    
    const reservedRockets = rockets.filter((rocket)=>{return rocket.reserved})

    return (
      <div className="my-profile-item">
        <h2>My Rockets</h2>
        {reservedRockets.length < 1 ? (
          <p>Reserve a rocket</p>
        ) : (
          <table className="my-profile-mission-table">
            <tbody>
              {reservedRockets.map((rocket) => (
                <tr key={rocket.rocket_id}>
                  <td className="my-profil-mission">{rocket.rocket_name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
};

export default RocketReservedList;