import React from "react";
import Button from "../Button/Button";
import Brand from "../Brand/Brand";

const Hero = () => {
  return (
    <section className="px-6 sm:px-10">
      <div className="mt-2 sm:mt-14 sm:text-center">
        <h1 className="font-bold text-4xl text-textBlack mb-5 sm:text-5xl sm:px-28 sm:leading-[4rem]">
          Manage Payroll Like an Expert
        </h1>
        <p className="text-textGray text-base leading-7 mb-7 sm:px-24">
          Payna is helping you to setting up the payroll without required any
          finance skills or knowledge before
        </p>
        <Button isPrimary>Get Started</Button>
        <Brand />
      </div>
    </section>
  );
};

export default Hero;
