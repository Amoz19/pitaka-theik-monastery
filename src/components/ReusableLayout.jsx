import { useState } from "react";
import "../styles/presidingMonk.scss";
import { IonIosArrowDropdown } from "../utils/icon-utils";
import ProgramLink from "../components/ProgramLink";

const ReusableLayout = ({ children, dummydata, style }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (title) => {
    setSelectedItem(title === selectedItem ? null : title);
  };

  const renderSubtitle = (data) => {
    return data.map(([title, body], i) => (
      <>
        <div key={i} className="border-b-2 border-zinc-700 p-2 title-div">
          <div className="flex items-center">
            <p>{title}</p>
            <IonIosArrowDropdown
              onClick={() => handleClick(title)}
              className="ml-3"
            />
          </div>
          {selectedItem === title ? <p>{body}</p> : null}
        </div>
      </>
    ));
  };

  return (
    <div className={`px-16 mb-10`}>
      {children}
      <div className={`${style && "grid grid-cols-3 gap-x-14"}`}>
        {dummydata.map((d, i) => (
          <div key={i} className={`mb-5 bg-secondary rounded-md p-5`}>
            {renderSubtitle(d.data)}
            <div className="my-4">
              {d.totalStudents && (
                <p>ကျောင်းသားစုစုပေါင်း - {d.totalStudents}</p>
              )}
              {d.graduatedStudents && (
                <p>ဘွဲ့ရကျောင်းသား - {d.graduatedStudents}</p>
              )}
              {d.totalTeachers && <p>ဆရာမဦးရေ - {d.totalTeachers}</p>}
              {d.currentStudents && (
                <p>လက်ရှိကျောင်းသား - {d.currentStudents}</p>
              )}
            </div>
            <ProgramLink
              style="text-sm p-1 md:px-5 md:py-2 rounded-3xl text-white bg-primary"
              link={d.websiteLink}
            >
              Website
            </ProgramLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReusableLayout;
