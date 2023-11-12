import React from "react";
import { programs } from "./Home";
import { useState } from "react";
import cn from "../utils/twMergeUtils";
import { RadixIconsCross2 } from "../utils/icon-utils";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <nav className="h-20 bg-[#FAFAFA] flex items-center justify-around  font-semibold px-4 md:px-20  border">
      <h1
        className="text-3xl text-zinc-900 capitalize head"
        onClick={() => navigate("/")}
      >
        BhalTike
      </h1>
      <div
        className={cn(
          "hidden lg:flex flex-grow-1 justify-end transition-all delay-1000",
          {
            "flex flex-col justify-start absolute left-0 top-1 bg-white/80 backdrop-blur-lg h-screen ":
              isOpen,
          }
        )}
      >
        <button
          className="flex lg:hidden justify-end"
          onClick={() => setIsOpen(!isOpen)}
        >
          <RadixIconsCross2 className="text-2xl mt-3 mr-3" />
        </button>

        {programs.map(([data], i) => (
          <button
            key={i}
            className={cn(
              "flex py-2 px-12 hover:text-primary hover:scale-110 transition-all",
              { "my-3": isOpen }
            )}
          >
            {data}
          </button>
        ))}
      </div>
      <div>
        <button
          className="bg-primary px-6 py-2 rounded-3xl text-white lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          Menu
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
