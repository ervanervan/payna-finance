import React from "react";
import logo from "../../assets/logo_payna.svg";
import Button from "../Button/Button";

const NavBar = () => {
  return (
    <header className="bg-bgWhite">
      <nav className="px-6 py-10 sm:p-10 flex items-center justify-between">
        <div className="flex">
          <img src={logo} alt="logo-payna" className="w-12 mr-3" />
          <h1 className="text-textBlack font-semibold text-2xl">Payna</h1>
        </div>
        <div className="hidden sm:block">
          <Button isSecondary>Sign In</Button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
