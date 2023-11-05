import React from "react";
import PropTypes from "prop-types";

function MeaningWrapper({ type, data }) {
  return (
    <div className="my-4 w-full ">
      {/* for type */}
      <div className="w-full flex flex-row ">
        <p className="text-2xl font-bold">{type}</p>
        <div className="w-full h-1 bg-[#cccccc]"></div>
      </div>

      {/* for meaning? */}
      <div className="my-4 w-full">
        <p className="text-xl">Meaning</p>
        {data.map((item, index) => {
          return (
            <div key={index} className="my-2">
              <p className="text-xl font-bold">{item.definition}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MeaningWrapper;

MeaningWrapper.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};
