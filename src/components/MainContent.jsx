import React from "react";

const MainContent = () => {
  return (
    <div className="mt-10 p-[50px] items-start gap-[100px] flex justify-center flex-wrap opacity-100 w-[90%] bg-[#001D21] h-[600px] m-auto border-[#fb8569] border-2 rounded-[30px]">
      <h1 className="font-boldonse text-main  flex flex-col text-center text-[100px] font-bold">
        Hello ,I'm <span className="font-boldonse">Sun Rosa</span>{" "}
      </h1>
      <div className="h-full flex justify-center items-center relative w-[35%] rounded-full ">
        <img
          className="h-[90%] absolute z-[1]  w-[90%] object-cover object-top rounded-full"
          src="https://res.cloudinary.com/dnfahcxo3/image/upload/v1751728163/photo_2025-07-05_22-01-11_idkhfe.jpg"
          alt=""
        />
        <div className="line rounded-full w-full h-full  absolute border-r-2 border-main "></div>
        <div className="line rounded-full w-[95%] h-[95%] absolute border-r-2 border-main "></div>
      </div>
    </div>
  );
};

export default MainContent;
