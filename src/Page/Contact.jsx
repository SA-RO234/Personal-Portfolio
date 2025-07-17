import React from "react";
import Title from "../components/Title";
import FormContact from "../components/Contact/formContact";
const Contact = () => {
  return (
    <div
      id="Contact"
      className="md:px-[90px] px-4 rounded-[30px] pb-10 border-2 border-primary w-[90%] m-auto  bg-greenMain"
    >
      <Title title={"Contact Me"} />
      <div className="flex justify-between md:pt-10 pt-5 gap-10 md:gap-0 items-start w-full flex-wrap">
        <div className="md:w-[45%] w-full flex flex-wrap gap-5">
          <div className="flex items-center gap-1 border-2 px-3 border-primary text-primary rounded-full">
            <img
              className="w-10 h-10"
              src="https://res.cloudinary.com/dnfahcxo3/image/upload/v1752717041/b938083d-642e-4d50-b7db-9af0c6f7f32e.png"
              alt=""
            />{" "}
            rozasun61@gmail.com
          </div>
          <div className="flex items-center gap-2 border-2 px-3 border-primary text-primary rounded-full">
            <img
              className="w-6 h-6"
              src="https://res.cloudinary.com/dnfahcxo3/image/upload/v1752729274/10db88e3-5697-420e-92b2-c32cb997bcf8.png"
              alt=""
            />
            Instagram
          </div>
          <div className="flex items-center gap-1 border-2 px-3 border-primary text-primary rounded-full">
            <img
              className="w-7 h-7"
              src="https://res.cloudinary.com/dnfahcxo3/image/upload/v1752725056/ae7b510a-d6c4-4777-927e-379fae1373c0.png"
              alt=""
            />{" "}
            Facebook
          </div>
          <div className="flex items-center gap-1 border-2 px-3 border-primary text-primary rounded-full">
            <img
              className="w-7 h-7"
              src="https://res.cloudinary.com/dnfahcxo3/image/upload/v1752729365/54876a36-5db1-4fa7-9442-26610d5b4ae3.png"
              alt=""
            />{" "}
            Telegram
          </div>
          <div className="flex items-center gap-1 py-2 border-2 px-3 border-primary text-primary rounded-full">
            <img
              className="w-7 h-7"
              src="https://res.cloudinary.com/dnfahcxo3/image/upload/v1752724945/4ca330c6-385a-45b2-a46b-9cea90ff30af.png"
              alt=""
            />{" "}
            LinkedIn
          </div>
          <div className="flex items-center gap-1 border-2 px-3 border-primary text-primary rounded-full">
            <img
              className="w-5 h-5"
              src="https://res.cloudinary.com/dnfahcxo3/image/upload/v1752724773/twitter_vixvt8.png"
              alt=""
            />{" "}
            X (Twitter)
          </div>
          <div className="flex items-center gap-1 py-2 border-2 px-3 border-primary text-primary rounded-full">
            <img
              className="w-5 h-5"
              src="https://res.cloudinary.com/dnfahcxo3/image/upload/v1752724496/c35b7ca1-1efa-4c05-850b-887cdbf4ee9b.png"
              alt=""
            />{" "}
            +855 972 349 164
          </div>
        </div>
        <div className="md:w-[45%]  w-full">
          <FormContact />
        </div>
      </div>
    </div>
  );
};

export default Contact;
