import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "./DataFetching/FetchSlice";

function Input() {
  const data = useSelector((state) => state.fetchData.data);

  console.log(data);

  const inputRef = useRef(null);

  const dispatch = useDispatch();
  const handleClick = () => {
    let value = inputRef.current.value.trim();
    // console.log(value);
    if (value) {
      dispatch(fetchData(value));
      inputRef.current.value = "";
    }
    // console.log("clicked");
    // dispatch(fetchData());
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      let value = inputRef.current.value.trim();
      // console.log(value);
      if (value) {
        dispatch(fetchData(value));
        inputRef.current.value = "";
      }
    }
  };
  return (
    <div
      className="w-full h-16  rounded-xl flex flex-row focus-within:border-4 transition-all "
      onKeyDown={handleKeyDown}
    >
      <input
        ref={inputRef}
        type="text"
        className="w-full  flex justify-center align-center bg-transparent pl-2 text-[#cccccc] outline-0  w-full h-full rounded-xl"
        placeholder="Search a word"
      />
      <button className="w-12 h-full  rounded-xl " onClick={handleClick}>
        <img
          src="assets/icon-search.svg"
          alt="search"
          className="h-3/5 w-full"
        />
      </button>
    </div>
  );
}

export default Input;
