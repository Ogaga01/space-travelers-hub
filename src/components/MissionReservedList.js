import React from 'react';
import { useSelector } from 'react-redux';

const MissionReservedList = () => {
    const missions = useSelector((state)=>{return state.missionSlice.missions})

    const joinedMissions = missions.filter((mission)=>{return mission.joined})

    return (
      <div className="my-profile-item">
        <h2>My Missions</h2>
        {joinedMissions.length < 1 ? (
          <p>Be the first to join a mission</p>
        ) : (
          <table className="my-profile-mission-table">
            <tbody>
              {joinedMissions.map((mission, index) => {
                const count = index;
                return (
                  <tr key={count}>
                    <td className="my-profil-mission">{mission.name}</td>
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