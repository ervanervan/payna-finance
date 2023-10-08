import React from "react";
import logo from "../../assets/logo_payna.svg";

const NavBar = () => {
  return (
    <header className="bg-bgWhite">
      <nav className="px-6 py-10 flex items-center">
        <img src={logo} alt="logo-payna" className="w-12 mr-3" />
        <h1 className="text-textBlack font-semibold text-2xl">Payna</h1>
      </nav>
    </header>
  );
};

export default NavBar;
