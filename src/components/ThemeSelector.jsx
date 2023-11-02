import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "./ThemeSlice";

const themes = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
];

const ThemeSelector = () => {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    console.log(theme);
    console.log("theme changed");
  }, [theme]);

  const handleThemeChange = (theme) => {
    dispatch(changeTheme(theme));
    setIsDropdownOpen(false);

    console.log(`Selected Theme: ${theme}`);
  };
  const handleDropDown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={handleDropDown}
          className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-primary border-none text-sm font-medium text-gray-700 hover:bg-gray-50"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded={isDropdownOpen}
        >
          <div className="mr-2 flex">
            {" "}
            {theme}
            <img
              src="../../public/assets/icon-arrow-down.svg"
              className="ml-2"
            />
          </div>
        </button>
      </div>

      {/* Dropdown menu */}
      {isDropdownOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-primary ring-1 ring-black ring-opacity-5 transition ease-out duration-1000"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            {themes.map((theme) => (
              <button
                key={theme}
                onClick={() => handleThemeChange(theme)}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-primary-focus hover:text-primary-content"
                role="menuitem"
              >
                {theme}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeSelector;
