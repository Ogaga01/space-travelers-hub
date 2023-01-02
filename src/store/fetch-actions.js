import { rocketActions } from "./Rocket";

export const fetchRocketData = () => {
  console.log("That is a girl");

  return async (dispatch) => {
    const response = await fetch("https://api.spacexdata.com/v3/rockets");
    const data = await response.json();
    console.log(data);

    data.forEach((el) => {
      const rocket = {
        id: el.id,
        rocket_name: el.name,
        description: el.description,
        image: el.flickr_images[0],
        reserved: false,
      };

      dispatch(rocketActions.addRocket(rocket));
    });
  };
};
