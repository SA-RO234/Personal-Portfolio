import React from "react";
import Title from "../components/Title";
import CardComponent from "../components/projects/CardComponent";
import Button from "../components/button/Button";
import { BsGithub } from "react-icons/bs";
function Projects() {
  return (
    <div id="project" className="project flex flex-col pb-10 justify-center items-center gap-10 w-full h-auto">
      <Title title={"My Project"} />
      <div className="Project-container md:pt-10 gap-10 flex justify-center items-center flex-wrap">
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>

      <Button
        title="See Github"
        text={"pl-8"}
        icon={<BsGithub className="hover:text-black absolute z-50 left-5" />}
        className="after:border-2 text-[30px] hover:text-black  after:border-yellow text-yellow before:border-2 before:border-yellow"
      ></Button>
    </div>
  );
}

export default Projects;
