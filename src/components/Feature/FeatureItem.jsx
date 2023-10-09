import React from "react";

const FeatureItem = ({ title, desc, imgUrl }) => {
  return (
    <div className="flex text-start">
      <div className="mr-6 flex-initial">
        <img src={imgUrl} alt="feature image" className="w-16" />
      </div>
      <div className="flex-1">
        <h4 className="font-semibold text-xl text-textBlack mb-3">{title}</h4>
        <p className="text-textGray text-base leading-8">{desc}</p>
      </div>
    </div>
  );
};

export default FeatureItem;
