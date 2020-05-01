import React,{useState} from "react";
import {navigate} from '@reach/router'
import router from '../../router'
import { SquareTileStyle } from "./styles";

export const PaySquareTile = ({ url, name }) => {
  const [area, SetArea] = useState(name);

  const SelectPaymentMethod = () => {
    SetArea(name);
    window.localStorage.setItem("paymentmethod", area);
    navigate(router.sendJob);
  };
  return (
    <SquareTileStyle onClick={SelectPaymentMethod}>
      <img src={url} alt={name} height="50" width="50" />
    </SquareTileStyle>
  );
};
