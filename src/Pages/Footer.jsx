import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/barlogo.png";
import {
  PhFacebookLogo,
  BxBxlGmail,
  MaterialSymbolsCallOutlineSharp,
} from "../utils/icon-utils";

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
      ["bhaltike2022@gmail.com", "/", BxBxlGmail],
      [
        "ဘာတိုက် ပိဋကတ် မန်",
        "https://www.facebook.com/bartheikpitakotmon",
        PhFacebookLogo,
      ],
      ["09787222285", "/", MaterialSymbolsCallOutlineSharp],
    ],
  },
  {
    title: "Social ",
    subtitle: [
      [
        "တန်ဒစးဒုၚ်တက္ကသိုလ်",
        "https://www.facebook.com/mymopreuni",
        PhFacebookLogo,
      ],
      ,
      [
        "Jamoi Foundation",
        "https://www.facebook.com/profile.php?id=100080317545174",
        PhFacebookLogo,
      ],
      [
        "ဂကောံသင်သၟတ်မန် တ္ကအ်ခၟိုင်",
        "https://www.facebook.com/monyoungorganization",
        PhFacebookLogo,
      ],
    ],
  },
];

const Footer = () => {
  const getSubtitle = (subtitles) => {
    // console.log(icon);
    return subtitles.map(([value, link, Icon], i) => (
      <div key={i} className="my-3">
        <Link to={link} className="flex">
          {/* <button>{Icon && <Icon className="text-2xl mr-3" />}</button> */}
          <p>{value}</p>
        </Link>
      </div>
    ));
  };
  return (
    <div className="bg-footer text-white">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 p-5 md:px-20 md:py-6 ">
        <div className="flex justify-center items-center">
          <img src={logo} alt="logo" className="w-32" />
        </div>
        {footer.map((data, i) => (
          <div key={i}>
            <h1 className="foot-title mb-2 text-xl">{data.title}</h1>
            {getSubtitle(data.subtitle)}
          </div>
        ))}
      </div>
      <div className="text-center">
        <p className="text-sm pb-5">Copyright©2023 Bhaltike</p>
      </div>
    </div>
  );
};

export default Footer;
