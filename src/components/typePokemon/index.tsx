import React from "react";
import { ContainerName1, ContainerNameType1, ContainerType } from "./style";
import useTypes from "../hook/typesColor";
import { IPokemonProps } from "../detailsHeader";

interface PokemonType {
  type: { name: string } | undefined;
}

const TypePokemon = ({ type }: PokemonType) => {
  return (
    <ContainerType>
      <ContainerNameType1 color={useTypes(type && type.name)}>
        <ContainerName1>{type && type.name}</ContainerName1>
      </ContainerNameType1>
    </ContainerType>
  );
};
export default TypePokemon;
