import React from "react";
import { MaterialSymbolsMenuRounded } from "../utils/icon-utils";

const Navbar = () => {
  return (
    <nav className="h-14 bg-[#FAFAFA] flex items-center justify-between text-xl font-semibold px-20 border">
      <h1 className="text-l text-zinc-900 capitalize">
        RAMONNYA NIKAYA MON PITAKA THEIK MONASTERY
      </h1>
      <button className="bg-primary text-white px-4 py-2 rounded-2xl text-sm flex items-center">
        Menu <MaterialSymbolsMenuRounded className="text-2xl ml-1" />
      </button>
      {/* <MaterialSymbolsMenuRounded className="bg-primary text-white text-4xl">
        Menu
      </MaterialSymbolsMenuRounded> */}
    </nav>
  );
};

export default Navbar;
