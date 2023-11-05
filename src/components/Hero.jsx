import React from "react";
import Sound from "./Sound";
import { useSelector } from "react-redux";
import MeaningWrapper from "./MeaningWrapper";

function Hero() {
  const data = useSelector((state) => state.fetchData.data);
  console.log(data);

  return (
    <div className="w-full h-full">
      {data ? (
        <div>
          <Sound />
          {data[0].meanings.map((item, index) => (
            <MeaningWrapper
              key={index}
              type={item.partOfSpeech}
              data={item.definitions}
            />
          ))}
          <div className="w-full flex flex-row justify-center items-center  my-8">
            <p className="text-2xl mr-4  uppercase">Source</p>
            <div className="w-full h-[1px] bg-red-900 "></div>
          </div>
          <p className="text-xl  italic mb-4">{data[0].sourceUrls}</p>
        </div>
      ) : (
        <img
          src="/assets/Loading.svg"
          alt="loading"
          className="w-24 h-24 my-8 mx-auto"
        />
      )}
    </div>
  );
}

export default Hero;
