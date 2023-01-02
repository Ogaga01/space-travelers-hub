import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Navbar from "./components/Navbar";
import { fetchRocketData } from "./store/fetch-actions";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRocketData())
  }, [dispatch])
  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
