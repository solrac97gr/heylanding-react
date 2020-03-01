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
          Encuentra a los técnicos según el servicio que necesites. Podrás
          filtrar y encontrar el técnico adeacuado para ti, el que esté más cerca
          a ti o que ya esté recomendado por algún conocido tuyo.
        </Description>
        <StageContainer>
          <Stage>Selecciona tu ubicación.</Stage>
          <Stage>Escoge la especialidad.</Stage>
          <Stage>Contacta tu técnico.</Stage>
        </StageContainer>
        <ButtonCTA>Regístrate</ButtonCTA>
      </TextContainer>
      <ImgContainer>
        <Img src={servicios} alt="" />
      </ImgContainer>
    </WebAppContainer>
  );
};
