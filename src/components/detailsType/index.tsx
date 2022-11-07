import React from "react";
import { IPokemon } from "../card";
import useTypes from "../hook/typesColor";

import {
  ContainerName1,
  ContainerNameType1,
  ContainerNameType2,
  ContainerType,
} from "./style";
export interface IPokemonProps {
  data: IPokemon | undefined;
}

const DetailsType = ({ data }: IPokemonProps) => {
  return (
    <ContainerType>
      <ContainerNameType1 color={useTypes(data && data.types[0].type.name)}>
        <ContainerName1>{data && data.types[0].type.name}</ContainerName1>
      </ContainerNameType1>
      <ContainerNameType2></ContainerNameType2>
    </ContainerType>
  );
};

export default DetailsType;
