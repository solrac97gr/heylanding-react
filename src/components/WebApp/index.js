import React from "react";
import {
  WebAppContainer,
  Description,
  Img,
  ButtonCTA,
  ImgContainer,
  TextContainer,
  WebAppTitle,
  StageContainer,
  Stage
} from "./styles";
import servicios from "../../static/images/servicios.png";
export const WebApp = () => {
  return (
    <WebAppContainer>
      <TextContainer>
        <WebAppTitle>Disfruta de nuestra App Web</WebAppTitle>
        <Description>
          Encuentra a los técnicos segun el servicio que necesites.Podrás
          filtrar y econtrar el técnico adeacudo para ti, el que este más cerca
          a tí o que ya este recomendado por algun conocído tuyo.
        </Description>
        <StageContainer>
          <Stage>Selecciona tu ubicación.</Stage>
          <Stage>Escoge la especialidad.</Stage>
          <Stage>Contácta tu técnico.</Stage>
        </StageContainer>
        <ButtonCTA>Regístrate</ButtonCTA>
      </TextContainer>
      <ImgContainer>
        <Img src={servicios} alt="" />
      </ImgContainer>
    </WebAppContainer>
  );
};
