import React from "react";

const Button = ({ label }) => {
  return (
    <button className="py-3 px-10 font-semibold bg-bgNavy text-base text-textWhite rounded-full">
      {label}
    </button>
  );
};

export default Button;
