import React from "react";
import { useNavigate } from "react-router-dom";
import { IonArrowForwardCircleOutline } from "../utils/icon-utils";
import { twMerge } from "tailwind-merge";

const ProgramLink = ({ children, link, style }) => {
  const navigate = useNavigate();
  return (
    <>
      <button
        className={twMerge(
          "p-3 md:p-5 w-fit rounded-2xl  flex items-center bg-secondary",
          style
        )}
        onClick={() => navigate(link)}
      >
        {children}
        <IonArrowForwardCircleOutline className="text-2xl ml-3" />
      </button>
    </>
  );
};

export default ProgramLink;
