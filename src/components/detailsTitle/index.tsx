import React from "react";
import { ContainerTitle } from "./style";
import useTypes from "../hook/typesColor";
import { IPokemon } from "../card";
export interface IPokemonProps {
  data: IPokemon | undefined;
}

const DetailsTitle = ({ data }: IPokemonProps) => {
  return (
    <ContainerTitle color={useTypes(data && data.types[0].type.name)}>
      About
    </ContainerTitle>
  );
};

export default DetailsTitle;
