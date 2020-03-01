import React from "react";
import {
  AboutUSContainer,
  Objetive,
  AboutUsTitle,
  AboutUsContent,
  ObjetiveContainer
} from "./styles";

export const AboutUs = () => {
  return (
    <AboutUSContainer>
      <AboutUsTitle>Sobre nosotros.</AboutUsTitle>
      <AboutUsContent>
        Yendo! es una plataforma que conecta a técnicos con personas que
        necesiten de mantenimiento y/o reparación en los servicios básicos del
        hogar.
      </AboutUsContent>
      <ObjetiveContainer>
        <Objetive>
          Misión: Brindar soluciones rápidas, accesibles y confiables hacia nuestros
          usuarios, así como impulsar la ocupación de los técnicos en el mercado
          peruano.
        </Objetive>
        <Objetive>
          Visión: Ser la plataforma líder en el mercado en proveer servicios de
          reparación y mantenimiento del hogar.
        </Objetive>
      </ObjetiveContainer>
    </AboutUSContainer>
  );
};
