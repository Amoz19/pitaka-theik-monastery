import { Link } from "react-router-dom";
import {
  IonArrowForwardCircleOutline,
  ExternalLinkIcon,
} from "../utils/icon-utils";

import ProgramLink from "./ProgramLink";
const categories = [
  ["/headMonk", "ကျောင်းထိုင်ဆရာတော်"],
  ["/presidingMonk", "တိုက်အုပ်ဆရာတော်"],
  ["/trustee", "ကျောင်းဂေါပကအဖွဲ့"],
  ["/doctrinalInstructor", "စာချဆရာတော်"],
];

const ManagementCard = () => {
  // const renderProgramLinks = (names, link) => {
  //   return names.map((name, i) => (
  //     <ProgramLink
  //       style="bg-primary rounded-md text-white p-4 outline-transparents"
  //       key={i}
  //       link={link}
  //     >
  //       <p className="">{name}</p>
  //     </ProgramLink>
  //   ));
  // };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
      {categories.map(([link, title], i) => (
        <div key={i} className=" bg-secondary p-8 rounded-3xl">
          <h3 className="text-xl mb-3">{title}</h3>
          <div className="w-fit flex items-center bg-blue-500 rounded px-3 py-1 text-white">
            <Link to={link}>
              <ExternalLinkIcon />
            </Link>
          </div>

          {/* <div className="flex flex-col gap-5 my-5">
            {renderProgramLinks(names, link)}
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default ManagementCard;
