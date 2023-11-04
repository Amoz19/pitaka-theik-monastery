import React from "react";
import { IcBaselineKeyboardArrowDown } from "../utils/icon-utils";

const Navbar = () => {
  return (
    <nav className="h-14 bg-[#FAFAFA] flex items-center justify-center  font-semibold px-4 md:px-20  border">
      <h1 className="text-3xl text-zinc-900 capitalize head">BhalTike</h1>
      {/* <button className="bg-primary text-white p-2 md:px-4 md:py-2 rounded-2xl text-xs md:text-sm flex items-center">
        Menu <IcBaselineKeyboardArrowDown className="text-2xl ml-1" />
      </button> */}
      {/* <MaterialSymbolsMenuRounded className="bg-primary text-white text-4xl">
        Menu
      </MaterialSymbolsMenuRounded> */}
    </nav>
  );
};

export default Navbar;
