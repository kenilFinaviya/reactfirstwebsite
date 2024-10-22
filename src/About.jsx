import React from "react";
// import img from "../src/Images/1.jpg";
import { NavLink } from "react-router-dom";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About Page"
        imgsrc=""
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;
