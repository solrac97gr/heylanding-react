import React from "react";
import heroimage from "../../static/images/43040.jpg"

import {
  HeroContainer,
  SeoTitle,
  MktTitle,
  TextContainer,
  ImgContainer,
  ButtonCTA,
  Img
} from "./styles";

export const Hero = () => {
  return (
    <HeroContainer>
      <TextContainer>
        <MktTitle>Reparar nunca fue tan fácil.</MktTitle>
        <SeoTitle>Servicio técnico a domicilio en Lima</SeoTitle>
        <ButtonCTA href="https://api.whatsapp.com/send?phone=51927459387&text=Hola!%20Mi%20requerimiento%20es">Contactar un técnico </ButtonCTA>
      </TextContainer>
      <ImgContainer>
        <Img
          src={heroimage}
          alt=""
        />
      </ImgContainer>
    </HeroContainer>
  );
};
