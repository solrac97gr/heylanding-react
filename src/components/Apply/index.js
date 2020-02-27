import React from "react";
import solver from '../../static/images/solver.svg'
import {
  ApplyContainer,
  BenefitContainer,
  Benefit,
  Centered,
  ButtonCTA,
  ApplyTitle,
  ApplyContent,
  Img
} from "./styles";

export const Apply = () => {
  return (
    <ApplyContainer>
      <BenefitContainer>
        <ApplyTitle>¿Quieres ser uno de nuestros especialistas?</ApplyTitle>
        <ApplyContent>
          Yendo! siempre se encuentra en busca buscando a técnicos que sean
          expertos en su oficio y brinden un excelente servicio a sus clientes.
          Los mejores expertos del servicio a domicilio utilizan Yendo para
          obtener una buena paga y una programación flexible.
        </ApplyContent>
        <Benefit>Presencia digital.</Benefit>
        <Benefit>Más oportunidades con clientes.</Benefit>
        <Benefit>Red de contactos.</Benefit>
      </BenefitContainer>
      <Centered>
          <Img src={solver} alt=""/>
        <ButtonCTA to="/">Aplicar como técnico</ButtonCTA>
      </Centered>
    </ApplyContainer>
  );
};
