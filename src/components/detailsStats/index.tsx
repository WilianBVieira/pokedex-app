import { Progress } from "native-base";
import React from "react";
import { IPokemonProps } from "../detailsHeader";
import useTypes from "../hook/typesColor";
import {
  ContainerBarra,
  ContainerBaseStats,
  ContainerProgress,
  ContainerProgress1,
  ContainerProps,
  ContainerPropsName,
  ContainerRealValue,
  ContainerValue,
} from "./styles";

const DetailsStats = ({ data }: IPokemonProps) => {
  return (
    <ContainerBaseStats>
      <ContainerProps>
        <ContainerPropsName color={useTypes(data && data.types[0].type.name)}>
          HP
        </ContainerPropsName>
        <ContainerPropsName color={useTypes(data && data.types[0].type.name)}>
          ATK
        </ContainerPropsName>
        <ContainerPropsName color={useTypes(data && data.types[0].type.name)}>
          DEF
        </ContainerPropsName>
        <ContainerPropsName color={useTypes(data && data.types[0].type.name)}>
          SATK
        </ContainerPropsName>
        <ContainerPropsName color={useTypes(data && data.types[0].type.name)}>
          SDEF
        </ContainerPropsName>
        <ContainerPropsName color={useTypes(data && data.types[0].type.name)}>
          SPD
        </ContainerPropsName>
      </ContainerProps>
      <ContainerBarra />
      <ContainerValue>
        <ContainerRealValue>
          {data && data.stats[0].base_stat}
        </ContainerRealValue>
        <ContainerRealValue>
          {data && data.stats[1].base_stat}
        </ContainerRealValue>
        <ContainerRealValue>
          {data && data.stats[2].base_stat}
        </ContainerRealValue>
        <ContainerRealValue>
          {data && data.stats[3].base_stat}
        </ContainerRealValue>
        <ContainerRealValue>
          {data && data.stats[4].base_stat}
        </ContainerRealValue>
        <ContainerRealValue>
          {data && data.stats[5].base_stat}
        </ContainerRealValue>
      </ContainerValue>
      <ContainerProgress>
        <ContainerProgress1>
          <Progress
            value={data && data.stats[0].base_stat / 2}
            colorScheme={useTypes(data && data.types[0].type.name)}
          />
        </ContainerProgress1>
        <ContainerProgress1>
          <Progress
            value={data && data.stats[1].base_stat / 2}
            colorScheme={useTypes(data && data.types[0].type.name)}
          />
        </ContainerProgress1>
        <ContainerProgress1>
          <Progress
            value={data && data.stats[2].base_stat / 2}
            colorScheme={useTypes(data && data.types[0].type.name)}
          />
        </ContainerProgress1>
        <ContainerProgress1>
          <Progress
            value={data && data.stats[3].base_stat / 2}
            colorScheme={useTypes(data && data.types[0].type.name)}
          />
        </ContainerProgress1>
        <ContainerProgress1>
          <Progress
            value={data && data.stats[4].base_stat / 2}
            colorScheme={useTypes(data && data.types[0].type.name)}
          />
        </ContainerProgress1>
        <ContainerProgress1>
          <Progress
            value={data && data.stats[5].base_stat / 2}
            colorScheme={useTypes(data && data.types[0].type.name)}
          />
        </ContainerProgress1>
      </ContainerProgress>
    </ContainerBaseStats>
  );
};

export default DetailsStats;
