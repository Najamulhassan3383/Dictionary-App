import React from "react";
import PropTypes from "prop-types";

function MeaningWrapper({ type, data }) {
  return (
    <div className="my-6 w-full ">
      {/* for type */}
      <div className="w-full flex flex-row justify-center items-center  my-8">
        <p className="text-2xl mr-4  uppercase">{type}</p>
        <div className="w-full h-[1px] bg-red-900 "></div>
      </div>

      {/* for meaning? */}
      <div className="my-4 w-full">
        <p className="text-xl  italic mb-4">Meaning</p>
        <ul className="list-disc">
          {data.map((item, index) => {
            return (
              <li key={index} className="my-2">
                <p className="text-lg ">{item.definition}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default MeaningWrapper;

MeaningWrapper.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};
