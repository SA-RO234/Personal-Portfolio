import React from "react";
import Title from "../components/Title";
import EducationGroup from "../components/education/educationGroup";

const Education = () => {
  return (
    <div id="education" className="pb-[50px]">
      <Title title={"My Education"} />
      <EducationGroup path="Sciences" specialization="Computer Sciences" year="2022-2026" school="Royal University of Phnom Penh" />
       <EducationGroup path="Social Sciences" specialization="Secondary School Hight School" year="2016-2022" school="Lvea Hight School" />
        <EducationGroup path="Primary Education" specialization="Elementary School" year="2011-2016" school="East/West Kok Trea Primary School" />
    </div>
  );
};

export default Education;
