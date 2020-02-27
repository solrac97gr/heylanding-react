import React from "react";
import { MdStar } from "react-icons/md";
import { FaHammer } from "react-icons/fa";
import {
  TecniciansCardStyled,
  Button,
  TecniciansCardHeader,
  ButtonContainer,
  ColumnText,
  Link,
  SkillBadged,
  SkillsContainer,
  TecnicName
} from "./styles";

export const TecniciansCard = ({
  name = "Nombre Apellido",
  qualify = 4,
  skills = ["carpinteria"]
}) => {
  return (
    <TecniciansCardStyled>
      <TecniciansCardHeader>
        <ColumnText>
          <TecnicName>{name}</TecnicName>
          <SkillsContainer>
            {skills.map((n) => (
              <SkillBadged>{n}</SkillBadged>
            ))}
          </SkillsContainer>

          <div>
            {[1, 2, 3, 4, 5].map((n) => (
              <MdStar color="yellow" key={n} />
            ))}
          </div>
        </ColumnText>
        <FaHammer size={20} />
      </TecniciansCardHeader>

      <ButtonContainer>
        <Button primary>
          <Link href="https://api.whatsapp.com/send?phone=51927459387&text=Hola!%20Mi%20requerimiento%20es">
            Contactar
          </Link>
        </Button>
        <Button disabled>Ver Perfil</Button>
      </ButtonContainer>
    </TecniciansCardStyled>
  );
};
