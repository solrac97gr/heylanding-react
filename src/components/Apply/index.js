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
import { FaCheck } from "react-icons/fa";
import {} from 'react-icons/'

export const Apply = () => {
  var size = 15
  return (
    <ApplyContainer>
      <BenefitContainer>
        <ApplyTitle>¿Quieres ser uno de nuestros especialistas?</ApplyTitle>
        <ApplyContent>
          Yendo! siempre se encuentra en búsqueda de técnicos que sean
          expertos en su oficio y brinden un excelente servicio a sus clientes.
          Los mejores profesionales en este rubro utilizan Yendo! para
          obtener una buena paga y una programación flexible.
        </ApplyContent>
        <Benefit><FaCheck size={size}/> Presencia digital.</Benefit>
        <Benefit><FaCheck size={size}/> Más oportunidades con clientes.</Benefit>
        <Benefit><FaCheck size={size}/> Red de contactos.</Benefit>
      </BenefitContainer>
      <Centered>
          <Img src={solver} alt=""/>
        <ButtonCTA href="https://api.whatsapp.com/send?phone=51927459387&text=Hola!%20Mi%20requerimiento%20es">Aplicar como técnico</ButtonCTA>
       
      </Centered>
    </ApplyContainer>
  );
};
