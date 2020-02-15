import React, { useEffect, useState } from "react";
import { TecniciansCard } from "../TecniciansCard";
import { TecniciansCardListContainer } from "./styles";

const datatest = [
  {
    Dirección: "San Miguel",
    "Fecha de actualización de registro": {
      _seconds: 1581275880,
      _nanoseconds: 0
    },
    Especialidad: ["Gasfitero", "Carpintero", "Electricista"],
    Rol: true,
    Nombre: "Spazio técnicos",
    "Fecha de creación de registro": {
      _seconds: 1581275700,
      _nanoseconds: 0
    },
    Celular: "936742955"
  }
];

export const TecniciansCardList = (query) => {
  const [data, setData] = useState(datatest);
  useEffect(function() {
    fetch("https://us-central1-hey-solve.cloudfunctions.net/GetTechnicians")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        setData(data);
      });
  });

  return (
    <TecniciansCardListContainer>
      {data.map((n) => (
        <TecniciansCard key={n} name={n.Nombre} />
      ))}
    </TecniciansCardListContainer>
  );
};
