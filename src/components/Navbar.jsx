import React from "react";
import logo from "../assets/logo.png";
import "../index.scss";
const Navbar = () => {
  return (
    <div className="relative flex justify-center items-center shadow-md opacity-100 w-[90%] h-[80px] bg-[#001D21] m-auto border-2 border-[#fb8569] rounded-[30px]">
      {/* <a href="">
        <img
          className=" h-[70px] w-[75px] object-cover  rounded-[30%]"
          src={logo}
          alt=""
        />
      </a> */}
      <nav className="navbar" >
        <ul className="flex justify-around items-center text-[#fb8569]">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#aboutme">About Me</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#project">Project</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
