import React, { useState } from "react";
import { Nav, Logo, ArrowBack,Img } from "./styles";

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
      <ArrowBack size={31} color="#FE8307" onClick={handleClick} />
      <Logo />
      <Img src={photo} alt="" />
    </Nav>
  );
};
