import { useState } from "react";
import "../styles/presidingMonk.scss";

import ProgramLink from "../components/ProgramLink";
import Dropdown from "./Dropdown";

const ReusableLayout = ({ children, dummydata, style }) => {
  return (
    <div className={`px-8 md:px-16 mb-10`}>
      {children}
      <div
        className={`${
          style && "grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-14"
        }`}
      >
        {dummydata.map((d, i) => (
          <div key={i} className={`mb-5 bg-secondary h-72 rounded-md p-8`}>
            {d.data.map(([title, body], j) => (
              <Dropdown key={j} title={title} body={body} />
            ))}
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
            {style && (
              <ProgramLink
                style="text-sm px-5 py-2 rounded-3xl text-white bg-primary"
                href={d.websiteLink}
              >
                Website
              </ProgramLink>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReusableLayout;
