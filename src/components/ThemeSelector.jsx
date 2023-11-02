import React, { useState } from "react";

const themes = ["Default", "Dark", "Light"];

const ThemeSelector = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState("Default");

  const handleThemeChange = (theme) => {
    setSelectedTheme(theme);
    // Implement logic to change the theme based on the selected option
    // For example, you can set up CSS classes or use a theme library to handle theme switching
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
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-transparent border-none text-sm font-medium text-gray-700 hover:bg-gray-50"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded={isDropdownOpen}
        >
          {selectedTheme}
          {/* Dropdown arrow */}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Dropdown menu */}
      {isDropdownOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-transparent ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            {themes.map((theme) => (
              <button
                key={theme}
                onClick={() => handleThemeChange(theme)}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
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
