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
import { FaCheck } from "react-icons/fa";
import servicios from "../../static/images/servicios.png";
export const WebApp = () => {
  var size=15
  return (
    <WebAppContainer>
      <TextContainer>
        <WebAppTitle>Disfruta de nuestra App Web</WebAppTitle>
        <Description>
          Encuentra a los técnicos según el servicio que necesites. Podrás
          filtrar y encontrar al técnico adecuado para ti, al que esté más cerca
          o que ya esté recomendado por algún conocido tuyo.
        </Description>
        <StageContainer>
          <Stage><FaCheck size={size}/> Selecciona tu ubicación.</Stage>
          <Stage><FaCheck size={size}/> Escoge la especialidad.</Stage>
          <Stage><FaCheck size={size}/> Contacta tu técnico.</Stage>
        </StageContainer>
        <ButtonCTA href="https://api.whatsapp.com/send?phone=51927459387&text=Hola!%20Mi%20requerimiento%20es">Regístrate</ButtonCTA>
      </TextContainer>
      <ImgContainer>
        <Img src={servicios} alt="" />
      </ImgContainer>
    </WebAppContainer>
  );
};
