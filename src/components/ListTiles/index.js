import React from "react";
import { ListTilesContainer } from "./styles";
import { SquareTile } from "../SquareTile";
import { FaHammer, FaKey, FaPaintRoller } from "react-icons/fa";
import { GiTap, GiElectric, GiElectricalResistance } from "react-icons/gi";

const size = 35;
const color = "#7b1fa2";

const data = [
  {
    id: 1,
    name: "Carpintería",
    icon: <FaHammer size={size} color={color} />
  },
  {
    id: 2,
    name: "Cerrajería",
    icon: <FaKey size={size} color={color} />
  },
  {
    id: 3,
    name: "Gasfitería",
    icon: <GiTap size={size} color={color} />
  },
  {
    id: 4,
    name: "Pinturas",
    icon: <FaPaintRoller size={size} color={color} />
  },
  {
    id: 5,
    name: "Electricista",
    icon: <GiElectric size={size} color={color} />
  },
  {
    id: 6,
    name: "Instalación",
    icon: <GiElectricalResistance size={size} color={color} />
  }
];

export const ListTiles = () => {
  return (
    <ListTilesContainer>
      {data.map( el => {
        return (
          <SquareTile key={el.id} icon={el.icon} name={el.name}></SquareTile>
        );
      })}
    </ListTilesContainer>
  );
};
