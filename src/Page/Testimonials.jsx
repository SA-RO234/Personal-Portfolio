import React from "react";
import TestimonialCard from "../components/Testimonials/TestimonialCard";
import Title from "../components/Title";

const Testimonials = () => {
  return (
    <div className=" md:px-5 border-yellow">
      <Title title={"Testimonials"} />
      <div className="w-full md:px-[70px] gap-20 md:gap-0 flex-wrap flex justify-center md:justify-between py-20">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </div>
  );
};

export default Testimonials;
