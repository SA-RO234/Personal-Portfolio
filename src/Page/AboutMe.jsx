import React from "react";
import Title from "../components/Title";

const AboutMe = () => {
  return (
    <div
      id="aboutme"
      className="about-me    bg-greenMain  w-full   mt-[100px] p-[0px_67px] "
    >
      <Title title="About Me" />
      <div className="flex w-full flex-wrap">
        <div className="w-[45%]">
          <p className="pb-3 indent-10">
            I am a Web Developer specializing in designing and building modern,
            high-performance websites and applications. With a strong foundation
            in HTML, CSS, JavaScript, React.js, Vue.js, PHP, and MySQL, I love
            bringing creative ideas to life through clean and efficient code.
          </p>
          <p className="pb-[100px] indent-10">
            Beyond coding, I am passionate about UI/UX design, ensuring every
            project is both functional and visually appealing. I enjoy crafting
            interactive user interfaces, optimizing web performance, and
            creating responsive layouts for seamless digital experiences. I am
            committed to continuous learning and staying up-to-date with the
            latest technologies, always seeking new challenges to grow my skills
            and deliver impactful web solutions.
          </p>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default AboutMe;
