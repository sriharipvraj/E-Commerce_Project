"use client";
import React, { useState } from "react";
import HeaderLinks from "./HeaderLinks";
import CartSvg from "../_svg/CartSvg";
import Bars from "../../../public/bars-solid.svg";

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);
  const showMenuFuntion = () => {
    
       setShowMenu(!showMenu);
    console.log(showMenu);
  };
  return (
    <div>
      <div   className="bg-cyan-900 flex justify-between p-6 sticky top-0 z-40">
        <div>
          <h1 className="text-global-font-h3 font-extrabold text-white hover:text-global-color-blue cursor-pointer max-md:text-global-font-h5 ">
            E-COMMERCE
          </h1>
        </div>
        <div  className="flex gap-12 ">
          <div className="max-md:hidden"><HeaderLinks/></div>
          {showMenu ? (
            <div className=" w-5 md:hidden" onClick={showMenuFuntion}>
              <Bars />
            </div>
          ) : (
            <div className=" flex fixed top-0  inset-0 z-10   h-full  ">
              <div onClick={showMenuFuntion} className=" w-3/4 h-full" ></div>
             <div className="pt-10 pl-8 w-full bg-cyan-300 h-full hover:text-global-color-blue"> <HeaderLinks/></div>
            </div>
          )}

          <div className="relative ">
            <CartSvg />
            <div className="absolute rounded-full bg-red-500 w-auto px-1 text-xs -top-2 -right-2  ">
              <h1>0</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
