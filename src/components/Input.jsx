import React from "react";

function Input() {
  return (
    <div className="w-full h-12 bg-red-900 rounded-xl">
      <input
        type="text"
        className="w-full bg-[#0d1829] flex bg-transparent pl-2 text-[#cccccc] outline-0"
        placeholder="Search a word"
      />
    </div>
  );
}

export default Input;
