import React from "react";
import contactImg from "../../assets/contact_img.svg";
import Button from "../Button/Button";
import Input from "../Input/Input";

const Contact = () => {
  return (
    <section className="container mx-auto lg:flex lg:items-center lg:justify-center lg:mb-20 lg:px-7">
      <div className="px-6 py-4 flex justify-center lg:flex-1 lg:p-0">
        <img
          src={contactImg}
          alt="image contact"
          className="w-80 sm:w-3/4 lg:max-w-screen-sm"
        />
      </div>
      <div className="my-11 text-center px-6 lg:flex-1 lg:m-0 lg:text-left lg:p-0">
        <h4 className="mb-1 font-bold text-textRed text-base">
          SAVE MORE TIME
        </h4>
        <h2 className="font-bold text-textBlack text-2xl sm:text-3xl mb-5">
          And Boost Productivity
        </h2>
        <p className="text-textGray leading-7 mb-12 lg:mb-10 text-base sm:px-24 lg:px-0 lg:w-2/3">
          Your employees can bring any success into your business, so we need to
          take care of them
        </p>
        <div className="mt-11 flex flex-col sm:items-center gap-3 justify-center lg:justify-normal sm:flex-row mb-28 lg:m-0">
          <Input />
          <Button isPrimary>Get Started</Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
