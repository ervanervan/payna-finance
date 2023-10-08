import React from "react";
import Button from "../Button/Button";
import Brand from "../Brand/Brand";

const Hero = () => {
  return (
    <section className="px-6">
      <div className="mt-2">
        <h1 className="font-bold text-4xl text-textBlack mb-5">
          Manage Payroll Like an Expert
        </h1>
        <p className="text-textGray leading-7 mb-7">
          Payna is helping you to setting up the payroll without required any
          finance skills or knowledge before
        </p>
        <Button label={"Get Started"}></Button>
        <Brand />
      </div>
    </section>
  );
};

export default Hero;
