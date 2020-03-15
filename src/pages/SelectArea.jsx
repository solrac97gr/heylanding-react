import React from "react";
import { SelectHeroTitle } from "../components/SelectHeroTitle";
import { ListTiles } from "../components/ListTiles";

export const SelectArea = () => {
  return (
    <>
       <SelectHeroTitle title={"¿En qué área se encuentra el problema?"}/>
      <ListTiles></ListTiles>
    </>
  );
};
