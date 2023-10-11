import React, { useState } from "react";
import logo from "../../assets/logo_payna.svg";
import Button from "../Button/Button";
import { Cancel, Menu } from "iconoir-react";

const NavBar = () => {
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
        <div
          x-on:click="navOpen = !navOpen"
          className="sm:hidden cursor-pointer"
        >
          <Menu />
        </div>
        <div className="hidden sm:block">
          <Button isSecondary>Sign In</Button>
        </div>
      </nav>
      <div
        x-data="{open : false}"
        x-show="navOpen"
        x-transition:enter="transition ease-out duration-300 transform origin-right"
        x-transition:enter-start="opacity-0 translate-x-full"
        x-transition:enter-end="opacity-100 translate-x-0"
        x-transition:leave="transition ease-in duration-300 transform origin-left"
        x-transition:leave-start="opacity-100 translate-x-0"
        x-transition:leave-end="opacity-0 translate-x-full"
        className="fixed w-3/4 h-screen top-0 right-0 px-6 py-20 bg-white shadow-2xl sm:hidden flex flex-col items-center gap-10 text-textBlack justify-center"
      >
        <li className="list-none hover:text-bgNavy duration-300">
          <a href="#home">Home</a>
        </li>
        <li className="list-none hover:text-bgNavy duration-300">
          <a href="#features">Features</a>
        </li>
        <li className="list-none hover:text-bgNavy duration-300">
          <a href="#showcase">Showcase</a>
        </li>
        <li className="list-none hover:text-bgNavy duration-300">
          <a href="#pricing">Pricing</a>
        </li>
        <div>
          <Button isSecondary>Sign In</Button>
        </div>
        <div
          x-on:click="navOpen = !navOpen"
          className="absolute top-10 right-5 cursor-pointer"
        >
          <Cancel width={30} height={30} />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
