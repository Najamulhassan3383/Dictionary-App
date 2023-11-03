import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "./DataFetching/FetchSlice";

function Input() {
  const data = useSelector((state) => state.fetchData.data);

  console.log(data);

  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    console.log("clicked");
    dispatch(fetchData());
  };
  return (
    <div className="w-full h-16  rounded-xl flex flex-row hover:border-4 transition-all ">
      <input
        type="text"
        className="w-full  flex justify-center align-center bg-transparent pl-2 text-[#cccccc] outline-0  w-full h-full rounded-xl"
        placeholder="Search a word"
      />
      <button className="w-12 h-full  rounded-xl " onClick={handleClick}>
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
