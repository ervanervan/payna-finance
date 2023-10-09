import React from "react";
import FeatureItem from "./FeatureItem";
import { Features } from "../../Data";

const Feature = () => {
  return (
    <section className="py-20 px-6">
      <div className="text-center">
        <h4 className="text-textRed font-bold text-base mb-1">WORK BETTER</h4>
        <h2 className="text-textBlack font-bold text-3xl mb-5">
          For Your Business
        </h2>
        <p className="text-textGray leading-7 mb-12 text-base">
          We did research what your company needs and here we are providing all
          of them just for you
        </p>
        <div className="flex flex-col gap-[3.75rem]">
          {Features.map((Feature) => {
            return <FeatureItem key={Feature.id} {...Feature} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Feature;
