import React, { useState } from "react";
import router from '../../router'
import { SquareTileStyle, SquareText } from "./styles";
import { navigate } from "@reach/router";

export const SquareTile = ({ name, icon }) => {
  const [area, SetArea] = useState(name);

  const SelectService = () => {
    SetArea(name);
    window.localStorage.setItem("area", area);
    navigate(router.selectService);
  };
  return (
    <SquareTileStyle onClick={SelectService}>
      {icon}
      <SquareText>{name}</SquareText>
    </SquareTileStyle>
  );
};
