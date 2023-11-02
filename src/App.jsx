import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { changeTheme } from "./components/ThemeSlice";

function App() {
  const theme = useSelector((state) => state.theme.value);

  const dispatch = useDispatch();
  const handleChange = (e) => {
    e.preventDefault();
    console.log("clicked");
    dispatch(changeTheme("cyberpunk"));
  };
  // add data theme to html element
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    console.log(theme);
    console.log("theme changed");
  }, [theme]);

  return (
    <div>
      <img
        src="/assets/Loading.svg"
        alt="loading"
        className="w-20 h-20"
        onClick={handleChange}
      />
    </div>
  );
}

export default App;
