import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/barlogo.png";

const footer = [
  {
    title: "About Program",
    subtitle: [
      ["What you will learn?", "/"],
      ["Program Duration?", "/"],
      ["who can join?", "/"],
    ],
  },
  {
    title: "Contact Us",
    subtitle: [
      ["Email", "/"],
      ["Message", "/"],
      ["Phone-number", "/"],
    ],
  },
  {
    title: "Social ",
    subtitle: [
      ["Facebook", "/"],
      ["Instagram", "/"],
      ["Tiktok", "/"],
    ],
  },
];

const Footer = () => {
  const getSubtitle = (subtitles) => {
    return subtitles.map(([value, link], i) => (
      <div key={i}>
        <Link to={link}>{value}</Link>
      </div>
    ));
  };
  return (
    <div className="bg-primary grid grid-cols-4 px-20 py-6 text-white">
      <div className="flex items-center">
        <img src={logo} alt="logo" className="w-16" />
      </div>
      {footer.map((data, i) => (
        <div key={i}>
          <h1 className="foot-title">{data.title}</h1>
          {getSubtitle(data.subtitle)}
        </div>
      ))}
    </div>
  );
};

export default Footer;
