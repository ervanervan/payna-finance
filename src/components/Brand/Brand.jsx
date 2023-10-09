import React from "react";
import brandApple from "../../assets/brand_apple.svg";
import brandAdobe from "../../assets/brand_adobe.svg";
import brandGoogle from "../../assets/brand_google.svg";
import brandSlack from "../../assets/brand_slack.svg";
import brandSpotify from "../../assets/brand_spotify.svg";

const Brand = () => {
  return (
    <div className="mt-12 sm:mt-16">
      <div>
        <h2 className="font-semibold text-textBlack text-base mb-7">
          Trusted by Global Companies
        </h2>
      </div>
      <div className="flex flex-wrap gap-6 sm:gap-12 sm:items-center sm:justify-center">
        <img src={brandApple} alt="brand-apple" className="w-20 sm:w-24" />
        <img src={brandAdobe} alt="brand-adobe" className="w-20 sm:w-24" />
        <img src={brandSlack} alt="brand-slack" className="w-20 sm:w-24" />
        <img src={brandSpotify} alt="brand-spotify" className="w-20 sm:w-24" />
        <img src={brandGoogle} alt="brand-google" className="w-20 sm:w-24" />
      </div>
    </div>
  );
};

export default Brand;
