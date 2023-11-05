import {  useDispatch } from "react-redux";
import  { useEffect } from "react";

import { fetchData } from "./components/Store/DataFetching/FetchSlice";
import MainContainer from "./components/MainContainer";

function App() {
  

  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(fetchData("hello"));
  }, []);

  return (
    <div>
      <MainContainer />
    </div>
  );
}

export default App;
