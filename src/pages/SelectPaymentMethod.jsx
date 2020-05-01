import React from "react";
import { SelectHeroTitle } from "../components/SelectHeroTitle";
import { ListPay } from "../components/ListPay";

export const SelectPaymentMethod = () => {
  return (
    <>
      <SelectHeroTitle title={"¿Cómo deseas pagar?"} fix />
      <ListPay></ListPay>
    </>
  );
};
