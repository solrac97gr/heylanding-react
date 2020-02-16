import React from "react";
import { BannerTec } from "../components/BannerTec";
import { SearchBar } from "../components/SearchBar";
import { TecniciansCardList } from "../components/TecniciansCardList";
import { Footter } from "../components/Footer";
import { useIsInQuery } from "../hooks/useIsInQuery";
import { NavBar } from "../components/Navbar";
import { MobileTopBanner } from "../components/MobileTopBanner";

export const Technicans = () => {
  const isMobile = useIsInQuery("(max-width: 500px)", false);

  return (
    <div>
      {!isMobile ? <NavBar /> : <MobileTopBanner />}
      <BannerTec />
      <SearchBar />
      <TecniciansCardList />
      {!isMobile ? <Footter /> : <></>}
    </div>
  );
};
