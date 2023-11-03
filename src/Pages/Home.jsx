import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.scss";

import hero8 from "../assets/hero8.png";
import ProgramLink from "../components/ProgramLink";

const programs = [
  ["Pre-University", "/doctrinalInstructor"],
  ["Jamoi Foundation", "/doctrinalInstructor"],
  ["Skill Building", "/doctrinalInstructor"],
  ["မွန်စာပေ", "/doctrinalInstructor"],
  ["စမ္မစကူးလ်", "/doctrinalInstructor"],
];

const Home = () => {
  return (
    //Hero
    <div className="p-0 md:px-20 mt-3">
      <div className="mw-full">
        <img src={hero8} className="h-[60vh] w-full object-fit" />
      </div>

      <div className="text-primary text-l md:text-2xl lg:text-3xl stroke-primary stroke-3 md:text-center my-5 title">
        <h2>RAMONNYA NIKAYA MON PITAKA THEIK MONASTERY</h2>
        <h2>ဘာတိုက်ပိဋကတ်မန်</h2>
      </div>

      <div className="sub-title my-16">
        <h2 className="text-xl text-primary mb-3">Programs</h2>
        <div className="grid grid-cols-3 gap-10">
          {programs.map(([programs, link], i) => (
            <ProgramLink key={i} link={link}>
              <p>{programs}</p>
            </ProgramLink>
          ))}
        </div>
      </div>
      <div className="sub-title">
        <h2 className="text-primary text-xl">Management Committee</h2>
      </div>

      <p className="text-red-500">This is home page.</p>
      <Link to="/headmonk">Go to Headmonk page</Link>
      <Link to="/doctrinalInstructor">Go to DoctrinalInstructor page</Link>
      <Link to="/presidingMonk">Go to PresidingMonk page</Link>
      <Link to="/trustee">Go to trustee page</Link>
    </div>
  );
};

export default Home;
