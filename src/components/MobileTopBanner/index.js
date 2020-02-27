import React, { useState } from "react";
import { Nav, LogoFont, ArrowBack,Img } from "./styles";

export const MobileTopBanner = () => {
  const [photo] = useState(function() {
    if (window.localStorage.getItem("photo")) {
      return window.localStorage.getItem("photo");
    }else{
      return ""
    }
  });
  const handleClick = () => {
    window.history.back();
  };
  

  return (
    <Nav>
      <ArrowBack size={31} color="#7b1fa2" onClick={handleClick} />
      <LogoFont to="/">yendo!</LogoFont>
      <Img src={photo} alt="" />
    </Nav>
  );
};
