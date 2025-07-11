import React from "react";
import { IoMdSkipBackward } from "react-icons/io";
const Song = () => {
  return (
    <div className="flex items-center  z-10 font-bold cursor-pointer font-popins  gap-3 rounded-3xl fixed bottom-10 right-10 p-3">
      <div className="w-full bg-white p-4 rounded-full  h-full flex items-center justify-center ">
        <img
          className=""
          src="https://res.cloudinary.com/dnfahcxo3/image/upload/v1751861082/music-alt_1_wge74w.png"
          alt=""
        />
      </div>

      {/* Song
      <IoMdSkipBackward /> */}
    </div>
  );
};

export default Song;
