import React from "react";
import { SelectHeroTitle } from "../components/SelectHeroTitle";
import {FormDirection} from '../components/FormDirection'

export const SelectDirection = () => {
  return (
    <>
      <SelectHeroTitle title={"¿Dónde se realizara el trabajo?"} />
      <FormDirection/>
    </>
  );
};
