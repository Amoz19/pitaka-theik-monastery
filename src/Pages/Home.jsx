import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <p>Testing</p>
      <Link to="/headmonk">Go to Headmonk page</Link>
      <Link to="/doctrinalInstructor">Go to DoctrinalInstructor page</Link>
      <Link to="/presidingMonk">Go to PresidingMonk page</Link>
      <Link to="/trustee">Go to trustee page</Link>
    </>
  );
};

export default Home;
