import React from "react";
import { MdStar } from "react-icons/md";
import { FaHammer } from "react-icons/fa";
import {
  TecniciansCardStyled,
  Button,
  TecniciansCardHeader,
  ButtonContainer,
  ColumnText
} from "./styles";

export const TecniciansCard = ({ name = "Nombre Apellido", qualify = 4 }) => {
  return (
    <TecniciansCardStyled>
      <TecniciansCardHeader>
        <ColumnText>
          <span>{name}</span>
          <div>
            {[1, 2, 3, 4, 5].map((n) => (
              <MdStar color="yellow" key={n} />
            ))}
          </div>
        </ColumnText>
        <FaHammer size={20}/>
      </TecniciansCardHeader>

      <ButtonContainer>
        <Button primary>Contactar</Button>
        <Button>Ver Perfil</Button>
      </ButtonContainer>
    </TecniciansCardStyled>
  );
};
