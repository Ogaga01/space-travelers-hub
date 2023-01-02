import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Navbar from "./components/Navbar";
import { fetchMissionData, fetchRocketData } from "./store/fetch-actions";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRocketData())
  }, [dispatch])

  useEffect(() => {
    dispatch(fetchMissionData());
  }, [dispatch]);

  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
