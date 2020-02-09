import React from "react";
import { TecniciansCard } from "../TecniciansCard";
import {TecniciansCardListContainer} from './styles'

export const TecniciansCardList = () => {
  return (
    <TecniciansCardListContainer>
      {[1, 2, 3, 4, 5,6,7,8,9].map((n) => (
        <TecniciansCard key={n} />
      ))}
    </TecniciansCardListContainer>
  );
};
