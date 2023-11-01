import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { changeTheme } from "./components/actions";

function App() {
  const theme = useSelector((state) => state.theme);
  console.log(theme);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    e.preventDefault();
    console.log("clicked");
    dispatch(changeTheme("light"));
  };
  //add data theme to html element
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div>
      <img
        src="../public/assets/Loading.svg"
        alt="loading"
        className="w-20 h-20"
        onClick={handleChange}
      />
    </div>
  );
}

export default App;
