import React from "react";
import { SelectHeroTitle } from "../components/SelectHeroTitle";
import {ServiceList} from '../components/ServiceList'


export const SelectService = () => {
  return (
    <>
      <SelectHeroTitle title={"Elige el servicio"} fix/>
      <ServiceList/>
    </>
  );
};
