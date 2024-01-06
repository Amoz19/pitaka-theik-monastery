import { Link } from "react-router-dom";
import { IonArrowForwardCircleOutline } from "../utils/icon-utils";
import { twMerge } from "tailwind-merge";

const ProgramLink = ({ children, link, style }) => {
  return (
    <>
      <Link
        to={link}
        className={twMerge(
          "px-6 py-3 w-fit rounded-2xl  flex items-center bg-secondary ",
          style
        )}
      >
        {children}
        <IonArrowForwardCircleOutline className="text-2xl ml-3" />
      </Link>
    </>
  );
};

export default ProgramLink;
