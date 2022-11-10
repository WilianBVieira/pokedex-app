import React from "react";

import { IPokemon } from "../card";
import {
  ContainerAbout,
  ContainerBarra,
  ContainerHeight,
  ContainerHeightIcon,
  ContainerHeightLogo,
  ContainerHeightName,
  ContainerHeightProps,
  ContainerHeightText,
  ContainerMoves,
  ContainerMovesName,
  ContainerMovesProps,
  ContainerWeight,
  ContainerWeightIcon,
  ContainerWeightLogo,
  ContainerWeightName,
  ContainerWeightProps,
  ContainerWeightText,
} from "./styles";
const Icon = require("../../assets/VectorWeight.png");
const Icon2 = require("../../assets/VectorHeight.png");
export interface IPokemonProps {
  data: IPokemon | undefined;
}

const DetailsAbout = ({ data }: IPokemonProps) => {
  console.log(data);
  return (
    <ContainerAbout>
      <ContainerWeight>
        <ContainerWeightProps>
          <ContainerWeightLogo>
            <ContainerWeightIcon source={Icon} />
          </ContainerWeightLogo>
          <ContainerWeightText>
            {data && data.weight / 10} kg
          </ContainerWeightText>
        </ContainerWeightProps>
        <ContainerWeightName>Weight</ContainerWeightName>
      </ContainerWeight>
      <ContainerBarra />
      <ContainerHeight>
        <ContainerHeightProps>
          <ContainerHeightLogo>
            <ContainerHeightIcon source={Icon2} />
          </ContainerHeightLogo>
          <ContainerHeightText>
            {data && data.height / 10} m
          </ContainerHeightText>
        </ContainerHeightProps>
        <ContainerHeightName>Height</ContainerHeightName>
      </ContainerHeight>
      <ContainerBarra />
      <ContainerMoves>
        <ContainerMovesProps>
          {data && data.moves[0].move.name}
        </ContainerMovesProps>
        <ContainerMovesName>Moves</ContainerMovesName>
      </ContainerMoves>
    </ContainerAbout>
  );
};

export default DetailsAbout;
