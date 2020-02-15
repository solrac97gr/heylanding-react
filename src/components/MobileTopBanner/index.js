import React from "react";
import { Nav, Logo,ArrowBack } from "./styles";


export const MobileTopBanner = () => {
const handleClick = () =>{
    window.history.back()
}
  return (
    <Nav>
      <ArrowBack size={31} color="#FE8307" onClick={handleClick}/>
      <Logo />
    </Nav>
  );
};
