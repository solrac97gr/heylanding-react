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
        Hey Solve es una plataforma que conecta a técnicos con personas que
        necesiten de mantenimiento y/o reparación en los servicios básicos del
        hogar.
      </AboutUsContent>
      <ObjetiveContainer>
        <Objetive>
          Misión: Brindar soluciones rápidas y accesibles hacia nuestros
          usuarios, asimismo impulsar la ocupación de los técnicos en el mercado
          peruano.
        </Objetive>
        <Objetive>
          Visión: Ser la plataforma líder en el mercado en proveer servicios de
          reparación y mantenimiento en el hogar.
        </Objetive>
      </ObjetiveContainer>
    </AboutUSContainer>
  );
};
