import React from "react";
import { useNavigate } from "react-router-dom";
import { IonArrowForwardCircleOutline } from "../utils/icon-utils";

const ProgramLink = ({ children, link }) => {
  const navigate = useNavigate();
  return (
    <>
      <button
        className="p-5 w-fit rounded-2xl bg-secondary flex items-center"
        onClick={() => navigate(link)}
      >
        {children}
        <IonArrowForwardCircleOutline className="text-2xl ml-3" />
      </button>
    </>
  );
};

export default ProgramLink;
