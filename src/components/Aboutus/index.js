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
      Yendo! es una manera innovadora de conectar a los mejores técnicos con los usuarios que lo requieran, en el momento y lugar que se encuentren. Contamos con técnicos cercanos a ti y que son especialistas en lo que necesites dentro del rubro de reparación y mantenimiento del hogar. Yendo! te ofrece un servicio de calidad, inmediato, de fácil accesibilidad y plenamente seguro. ¡Así que no dudes en contactarnos!
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
