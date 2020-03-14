import React from "react";
import { SquareTileStyle, SquareText } from "./styles";

export const SquareTile = ({ name, icon }) => {
  return (
    <SquareTileStyle>
      {icon}
      <SquareText>{name}</SquareText>
    </SquareTileStyle>
  );
};
