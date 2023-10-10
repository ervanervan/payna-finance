import React, { useState } from "react";
import logo from "../../assets/logo_payna.svg";
import Button from "../Button/Button";
import { Menu, Home, CardWallet, BrightStar, Computer } from "iconoir-react";

const NavBar = () => {
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <header
      id="home"
      className="bg-bgWhite container mx-auto"
      x-data="{navOpen : false}"
    >
      <nav className="px-6 py-10 sm:p-10 flex items-center justify-between">
        <div className="flex">
          <img src={logo} alt="logo-payna" className="w-12 mr-3" />
          <h1 className="text-textBlack font-semibold text-2xl">Payna</h1>
        </div>
        <div className="hidden sm:block">
          <ul className="flex items-center justify-center sm:gap-4 md:gap-8 lg:gap-14 text-textBlack">
            <li className="hover:text-bgNavy duration-300">
              <a href="#home">Home</a>
            </li>
            <li className="hover:text-bgNavy duration-300">
              <a href="#features">Features</a>
            </li>
            <li className="hover:text-bgNavy duration-300">
              <a href="#showcase">Showcase</a>
            </li>
            <li className="hover:text-bgNavy duration-300">
              <a href="#pricing">Pricing</a>
            </li>
          </ul>
        </div>
        <div x-on:click="navOpen = !navOpen" className="sm:hidden">
          <Menu />
        </div>
        <div className="hidden sm:block">
          <Button isSecondary>Sign In</Button>
        </div>
      </nav>
      <div
        x-data="{open : false}"
        x-show="navOpen"
        x-transition:enter="transition ease-out duration-300"
        x-transition:enter-start="opacity-0 scale-90"
        x-transition:enter-end="opacity-100 scale-100"
        x-transition:leave="transition ease-in duration-300"
        x-transition:leave-start="opacity-100 scale-100"
        x-transition:leave-end="opacity-0 scale-90"
        className="fixed bottom-0 left-0 right-0 p-4 border-t bg-white shadow-2xl bg-opacity-80 backdrop-blur-md sm:hidden"
      >
        <ul className="flex items-center justify-around text-textBlack">
          <li>
            <a
              href="#home"
              className={`flex justify-center gap-1 items-center flex-col ${
                activeItem === "home" ? "text-bgNavy" : ""
              }`}
              onClick={() => handleItemClick("home")}
            >
              <Home />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a
              href="#features"
              className={`flex justify-center gap-1 items-center flex-col ${
                activeItem === "features" ? "text-bgNavy" : ""
              }`}
              onClick={() => handleItemClick("features")}
            >
              <BrightStar />
              <span>Features</span>
            </a>
          </li>
          <li x-on:click="open = !open">
            <a
              href="#showcase"
              className={`flex justify-center gap-1 items-center flex-col ${
                activeItem === "showcase" ? "text-bgNavy" : ""
              }`}
              onClick={() => handleItemClick("showcase")}
            >
              <Computer />
              <span>Showcase</span>
            </a>
          </li>
          <li x-on:click="open = !open">
            <a
              href="#pricing"
              className={`flex justify-center gap-1 items-center flex-col ${
                activeItem === "pricing" ? "text-bgNavy" : ""
              }`}
              onClick={() => handleItemClick("pricing")}
            >
              <CardWallet />
              <span>Pricing</span>
            </a>
          </li>
        </ul>
        <div
          x-show="open"
          x-transition:enter="transition ease-out duration-300"
          x-transition:enter-start="opacity-0 scale-90"
          x-transition:enter-end="opacity-100 scale-100"
          x-transition:leave="transition ease-in duration-300"
          x-transition:leave-start="opacity-100 scale-100"
          x-transition:leave-end="opacity-0 scale-90"
          className="absolute bottom-24 left-1/2 -translate-x-1/2"
        >
          <Button isSecondary>Sign In</Button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
