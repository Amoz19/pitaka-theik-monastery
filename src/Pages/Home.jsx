import React from "react";
import { Link } from "react-router-dom";

// import "../app.scss";

// import hero1 from "../assets/hero1.jpg";
// import hero2 from "../assets/hero2.jpg";
// import hero3 from "../assets/hero3.jpg";
// import hero4 from "../assets/hero4.jpg";
// import hero5 from "../assets/hero5.jpg";
// import hero6 from "../assets/hero6.jpg";
// import hero7 from "../assets/hero7.jpg";
import hero8 from "../assets/hero8.png";

const Home = () => {
  return (
    <div className="p-0 md:px-20">
      <div className="mw-full">
        <img src={hero8} />
      </div>
      <div className="text-blue text-l md:text-2xl lg:text-3xl font-black md:text-center">
        <h2>RAMONNYA NIKAYA MON PITAKA THEIK MONASTERY</h2>
        <h2>ဘာတိုက်ပိဋကတ်မန်</h2>
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
