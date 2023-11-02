import React from "react";
import ThemeSelector from "./ThemeSelector";

function Header() {
  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3  mb-3">
      <div className="container px-4 mx-auto flex   items-center justify-between">
        <div className="w-full relative flex justify-between     ">
          <a
            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
            href="#"
          >
            <img src="../../public/assets/logo.svg" alt="logo" />
          </a>
        </div>
        <div className="flex flex-row items-center" id="example-navbar-warning">
          <ul className="flex flex-row list-none ">
            <li className="nav-item bg-transparent">
              <ThemeSelector/>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#pablo"
              >
                Profile
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#pablo"
              >
                Setting
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
