import React from "react";
import FeatureItem from "./FeatureItem";
import { Features } from "../../Data";

const Feature = () => {
  return (
    <section id="features" className="py-20 px-6 sm:py-32 sm:px-10">
      <div className="text-center">
        <h4 className="text-textRed font-bold text-base mb-1">WORK BETTER</h4>
        <h2 className="text-textBlack font-bold text-2xl sm:text-3xl mb-5">
          For Your Business
        </h2>
        <p className="text-textGray leading-7 mb-12 sm:mb-16 text-base sm:px-24">
          We did research what your company needs and here we are providing all
          of them just for you
        </p>
        <div className="flex flex-col gap-12 sm:flex-wrap sm:flex-row justify-center">
          {Features.map((Feature) => {
            return <FeatureItem key={Feature.id} {...Feature} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Feature;
