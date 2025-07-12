import React from "react";
import Progress from "./Progress";
const SkillsBlock = ({ title = "", Skill = [] }) => {
  return (
    <div className="item w-[550px]  justify-start items-start  text-pink rounded-2xl p-5 flex-col flex">
      <h1 className="text-pink text-2xl font-bold pb-[20px]">{title}</h1>
      <div className="flex w-full flex-col gap-5">
        {Skill.map((item, idx) => (
          <Progress key={idx} skill={item} />
        ))}
      </div>
    </div>
  );
};

export default SkillsBlock;
