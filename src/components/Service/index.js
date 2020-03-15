import React, { useState } from "react";
import { navigate } from "@reach/router";
import router from "../../router/index";
import {
  ServiceContainer,
  ServiceName,
  ServiceDescription,
  ServicePrice,
  ServiceInfo
} from "./styles";

export const Service = ({ name, description, price }) => {
  const [title, SetTitle] = useState(name);
  const [amount, SetAmount] = useState(price);

  const SelectService = () => {
    SetTitle(title);
    
    SetAmount(amount);

    const service = {
      name:title,
      price:amount
    }
    window.localStorage.setItem("service_name", service.name);
    window.localStorage.setItem("service_price", service.price);
    navigate(router.selectDirection);
  };
  return (
    <ServiceContainer onClick={SelectService}>
      <ServiceInfo>
        <ServiceName>{name}</ServiceName>
        <ServiceDescription>{description}</ServiceDescription>
      </ServiceInfo>
      <ServicePrice>S/.{price}</ServicePrice>
    </ServiceContainer>
  );
};
