import React from "react";

const Button = (props) => {
  return (
    <button
      type={props.type}
      className={`py-3 px-10
    ${props.className && props.className} 
    ${props.isPrimary && "font-medium bg-bgNavy text-base text-textWhite"} 
    ${props.isSecondary && "text-textBlack bg-bgGray"} text-base rounded-full`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
