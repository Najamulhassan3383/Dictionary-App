import React from "react";
import Sound from "./Sound";
import { useSelector } from "react-redux";
import MeaningWrapper from "./MeaningWrapper";

function Hero() {
    const data = useSelector((state) => state.fetchData.data);
    

  return (
    
    <div>
      <Sound />
      {meaning_data.map((item) => {
        return (
          <MeaningWrapper
            key={item.partOfSpeech}
            type={item.partOfSpeech}
            data={item.definitions}
          />
        );
      })}
    </div>
  );
}

export default Hero;
