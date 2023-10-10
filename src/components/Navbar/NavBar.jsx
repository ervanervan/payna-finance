import React, { useState } from "react";
import logo from "../../assets/logo_payna.svg";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { Menu, Home, CardWallet, BrightStar, Computer } from "iconoir-react";

const NavBar = () => {
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <header className="bg-bgWhite">
      <nav className="px-6 py-10 sm:p-10 flex items-center justify-between">
        <div className="flex">
          <img src={logo} alt="logo-payna" className="w-12 mr-3" />
          <h1 className="text-textBlack font-semibold text-2xl">Payna</h1>
        </div>
        <div className="sm:hidden">
          <Menu />
        </div>
        <div className="hidden sm:block">
          <Button isSecondary>Sign In</Button>
        </div>
      </nav>
      <div className="fixed bottom-0 left-0 right-0 p-4 border-t bg-white shadow-2xl bg-opacity-80 backdrop-blur-md">
        <ul className="flex items-center justify-around text-textBlack">
          <li>
            <Link
              to={"/"}
              className={`flex justify-center gap-1 items-center flex-col ${
                activeItem === "home" ? "text-bgNavy" : ""
              }`}
              onClick={() => handleItemClick("home")}
            >
              <Home />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              to={"#features"}
              className={`flex justify-center gap-1 items-center flex-col ${
                activeItem === "features" ? "text-bgNavy" : ""
              }`}
              onClick={() => handleItemClick("features")}
            >
              <BrightStar />
              <span>Features</span>
            </Link>
          </li>
          <li>
            <Link
              to={"#showcase"}
              className={`flex justify-center gap-1 items-center flex-col ${
                activeItem === "showcase" ? "text-bgNavy" : ""
              }`}
              onClick={() => handleItemClick("showcase")}
            >
              <Computer />
              <span>Showcase</span>
            </Link>
          </li>
          <li>
            <Link
              to={"#pricing"}
              className={`flex justify-center gap-1 items-center flex-col ${
                activeItem === "pricing" ? "text-bgNavy" : ""
              }`}
              onClick={() => handleItemClick("pricing")}
            >
              <CardWallet color="" />
              <span>Pricing</span>
            </Link>
          </li>
        </ul>
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2">
          <Button isSecondary>Sign In</Button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
