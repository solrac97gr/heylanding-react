import React from "react";
import { Team } from "../components/Team";
import { AboutUs } from "../components/Aboutus";

import { Footter } from "../components/Footer";
import { NavBar } from "../components/Navbar";

export const Aboutus = () => {
  return (
    <>
      <NavBar />
      <AboutUs />
      <Team />
      <Footter />
    </>
  );
};
