import React, { useEffect } from "react";
import { BsFacebook } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Button from "./button/Button";
import Typed from "typed.js";

const Hero = () => {
  useEffect(() => {
    const typed = new Typed(".element", {
      strings: ["un Rosa"],
      typeSpeed: 150,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
      showCursor: false,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="md:mt-10 p-[20px] md:px-[50px] md:py-0 grid items-center grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-1 opacity-100 w-[90%] bg-[#001D21]  m-auto border-[#fb8569] border md:border-2 md:rounded-[30px]">
      <div className="w-[100%] gap-4  flex  items-start justify-start flex-wrap">
        <h1 className="relative w-full text-main flex-col  flex text-start md:text-center leading-[85px] sm:leading-[120px] sm:text-[6.5em] text-[4em]  md:text-[7em] font-bold">
          Hello, I'm
          <span className="absolute  md:right-[-10px] right-[0px] top-[-5px] md:top-0 text-xl flex">
            [Active{" "}
            <span className="bg-green-700 block w-[10px] rounded-full h-[10px]"></span>
            ]
          </span><span>S<span className="element"></span> </span>
        </h1>
        <ul className="flex gap-5 border-t border-main pt-5">
          <li>
            <a className="text-5xl" href="#">
              <BsFacebook />
            </a>
          </li>
          <li>
            <a className="text-5xl" href="#">
              <FaTelegram />
            </a>
          </li>
          <li>
            <a className="text-5xl" href="#">
              <FaInstagram />{" "}
            </a>
          </li>
        </ul>
        <div className="flex flex-wrap items-center md:gap-10">
          <Button title={"Hire Me"} />
          <Button title={"Download CV"} />
        </div>
      </div>
      <div className="h-full flex  justify-center items-center w-full   ">
        <img
          className=" md:w-[85%]  border-[20px] w-full h-[80%] border-[rgba(121,120,120,0.17)] z-[1]  object-cover object-top rounded-full"
          src="https://res.cloudinary.com/dnfahcxo3/image/upload/v1751728163/photo_2025-07-05_22-01-11_idkhfe.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
