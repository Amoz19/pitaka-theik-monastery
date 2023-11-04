import React from "react";
import { IcBaselineKeyboardArrowDown } from "../utils/icon-utils";

const buttons = ["home", "programs", "committee"];

function handleNavClick(event, targetId) {
  event.preventDefault();
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
}

const Navbar = () => {
  return (
    <nav className="h-14 bg-[#FAFAFA] grid grid-cols-2 items-center  font-semibold px-4 md:px-20  border">
      <h1 className="text-3xl text-zinc-900 capitalize head">BhalTike</h1>
      <button className="bg-primary text-white p-2 md:px-4 md:py-2 md:hidden rounded-2xl text-xs md:text-sm flex items-center">
        Menu <IcBaselineKeyboardArrowDown className="text-2xl ml-1" />
      </button>
      <div>
        {/* <button onClick={(e) => handleNavClick(e, "home")}>Home</button>
        <button onClick={(e) => handleNavClick(e, "programs")}>Programs</button>
        <button onClick={(e) => handleNavClick(e, "committee")}>
          committee
        </button> */}
        {buttons.map((button, i) => (
          <button
            onClick={(e) => handleNavClick(e, button)}
            className="capitalize ml-20"
            key={i}
          >
            {button}
          </button>
        ))}
      </div>

      {/* <MaterialSymbolsMenuRounded className="bg-primary text-white text-4xl">
        Menu
      </MaterialSymbolsMenuRounded> */}
    </nav>
  );
};

export default Navbar;
