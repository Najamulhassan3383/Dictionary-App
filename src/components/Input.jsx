import React from "react";

function Input() {
  return (
    <div className="w-full h-16  rounded-xl flex flex-row hover:border-4 transition-all ">
      <input
        type="text"
        className="w-full  flex justify-center align-center bg-transparent pl-2 text-[#cccccc] outline-0  w-full h-full rounded-xl"
        placeholder="Search a word"
      />
      <button className="w-12 h-full  rounded-xl">
        <img
          src="../../public/assets/icon-search.svg"
          alt="search"
          className="h-3/5 w-full"
        />
      </button>
    </div>
  );
}

export default Input;
