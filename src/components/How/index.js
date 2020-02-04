import React from "react";
import { AddReqStyled,FunStyled,PricesStyled,SectionTitle, HowContainer,StageContainer, Stage, StageTitle,StageInfo } from "./styles";

export const How = () => {
  return (
    <HowContainer>
      <SectionTitle>¿Como Funciona?</SectionTitle>
      <StageContainer>
        <Stage>
          <StageTitle>Regístrate.</StageTitle>
          <StageInfo>Regístrate en nuestra web para poder contactar a cientos de técnicos.</StageInfo>
          <AddReqStyled />
        </Stage>
        <Stage>
          <StageTitle>Elíge tu técnico.</StageTitle>
          <StageInfo>Contacta con el técnico que mejor se adecue a tu proyecto y presupuesto.</StageInfo>
          <PricesStyled />
        </Stage>
        <Stage>
          <StageTitle>Califica el servicio.</StageTitle>
          <StageInfo>Califíca el trabajo de tu técnico para que más personas lo conozcan y mejore su reputación.</StageInfo>
          <FunStyled />
        </Stage>
      </StageContainer>
    </HowContainer>
  );
};
