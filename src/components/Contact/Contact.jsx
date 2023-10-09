import React from "react";
import contactImg from "../../assets/contact_img.svg";
import Button from "../Button/Button";
import Input from "../Input/Input";

const Contact = () => {
  return (
    <section>
      <div className="px-6 py-4">
        <img src={contactImg} alt="image contact" />
      </div>
      <div className="my-11 text-center px-6">
        <h4 className="mb-1 font-bold text-textRed text-base">
          SAVE MORE TIME
        </h4>
        <h2 className="font-bold text-textBlack text-2xl mb-5">
          And Boost Productivity
        </h2>
        <p className="text-textGray leading-7 mb-12 text-base">
          Your employees can bring any success into your business, so we need to
          take care of them
        </p>
        <div className="mt-11 flex flex-col">
          <Input />
          <Button label={"Get Started"}></Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
