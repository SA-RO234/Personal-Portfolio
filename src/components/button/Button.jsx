import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import GlareHover from "../animations/Glare-hover";
import "./Button.scss";
const Button = ({ title }) => {
  return (
    <button className="button">
      <span className="button_lg">
        <span className="button_sl"></span>
        <span className="button_text">{title}</span>
      </span>
    </button>
  );
};

export default Button;
