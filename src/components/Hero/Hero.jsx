import React from "react";
import Button from "../Button/Button";
import Brand from "../Brand/Brand";
import heroImg from "../../assets/hero_img.svg";

const Hero = () => {
  return (
    <section className="px-6 sm:px-10 container mx-auto">
      <div className="mt-2 sm:mt-14 sm:text-center">
        <div className="xl:flex xl:justify-center xl:items-center">
          <div className="xl:text-left xl:flex-1 xl:ml-10">
            <h1 className="font-bold text-4xl xl:text-[3.50rem] text-textBlack mb-5 sm:text-5xl sm:px-28 sm:leading-[4rem] xl:px-0 xl:w-4/5">
              Manage Payroll Like an Expert
            </h1>
            <p className="text-textGray text-base leading-7 mb-7 sm:px-24 xl:px-0 xl:w-4/5">
              Payna is helping you to setting up the payroll without required
              any finance skills or knowledge before
            </p>
            <Button isPrimary>Get Started</Button>
          </div>
          <div className="hidden xl:block flex-1">
            <img src={heroImg} alt="hero image" width={700} />
          </div>
        </div>
        <Brand />
      </div>
    </section>
  );
};

export default Hero;
