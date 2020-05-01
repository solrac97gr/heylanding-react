import React from "react";
import { Service } from "../Service";
import { ServiceListContainer } from "./styles";

const services = [
  {
    id: 1,
    name: "Laqueado",
    description: "Proceso por el cual la madera se pone bonita.",
    price: 20
  },
  {
    id: 2,
    name: "Barnizado",
    description: "Proceso por el cual la madera se pone bonita.",
    price: 30
  },
  {
    id: 3,
    name: "Lijado",
    description: "Proceso por el cual la madera se pone bonita.",
    price: 25
  },
  {
    id: 4,
    name: "Laqueado",
    description: "Proceso por el cual la madera se pone bonita.",
    price: 19
  },
  {
    id: 5,
    name: "Barnizado",
    description: "Proceso por el cual la madera se pone bonita.",
    price: 100
  },
  {
    id: 6,
    name: "Lijado",
    description: "Proceso por el cual la madera se pone bonita.",
    price: 200
  }
];

export const ServiceList = () => {
  return (
    <ServiceListContainer>
      {services.map((service) => {
        return (
          <Service
            key={service.id}
            name={service.name}
            description={service.description}
            price={service.price}
          />
        );
      })}
    </ServiceListContainer>
  );
};
