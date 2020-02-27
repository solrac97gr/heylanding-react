import React from "react";
import {SectionTitle, HowContainer,StageContainer, Stage, StageTitle,StageInfo,Img } from "./styles";
import register from '../../static/images/register.svg'
import search from '../../static/images/search.svg'
import feedback from '../../static/images/feedback.svg'

export const How = () => {
  return (
    <HowContainer>
      <SectionTitle>¿Como Funciona?</SectionTitle>
      <StageContainer>
        <Stage>
          <StageTitle>Regístrate.</StageTitle>
          <StageInfo>Regístrate en nuestra web para poder contactar a cientos de técnicos.</StageInfo>
          <Img src={register} alt=""/>
        </Stage>
        <Stage>
          <StageTitle>Solicita tu técnico.</StageTitle>
          <StageInfo>Contacta con el técnico que mejor se adecue a tu proyecto y presupuesto.</StageInfo>
          <Img src={search} alt=""/>
        </Stage>
        <Stage>
          <StageTitle>Califica el servicio.</StageTitle>
          <StageInfo>Califíca el trabajo de tu técnico para que más personas lo conozcan y mejore su reputación.</StageInfo>
          <Img src={feedback} alt=""/>
        </Stage>
      </StageContainer>
    </HowContainer>
  );
};
