import React from "react";
import { PaySquareTile } from "../PaySquareTile";
import { ListTilesContainer } from "./styles";

const data = [
  {
    id: 1,
    name:"yape",
    url: "https://ps4digitalperu.com/files/images/medio_pago/1561152919-yape.png"
  },
  {
    id: 2,
    name:"mercado pago",
    url: "https://www.mercadopago.com/org-img/Manual/ManualMP/imgs/isologoVertical.png"
  },
  {
    id: 3,
    name:"Tunki",
    url: "https://interbank.pe/documents/20182/3137890/logo_tunki_400x340.jpg/33170f05-8e36-448a-948b-901d7d29fb48?t=1539300744573"
  },
  {
    id: 4,
    name:"Lukita",
    url: "https://www.peruhardware.net/proxy.php?image=https%3A%2F%2Fwww.aldeasinfantiles.org.pe%2Fgetmedia%2Fb90b54d5-ea09-4416-97e3-870336b9202f%2Flukita.png&hash=a82b5c55889b038fe6376d580f899854"
  }
];

export const ListPay = () => {
  return (
    <ListTilesContainer>
      {data.map((item) => {
        return (
          <PaySquareTile
            key={item.id}
            url={item.url}
            name={item.name}
          ></PaySquareTile>
        );
      })}
    </ListTilesContainer>
  );
};
