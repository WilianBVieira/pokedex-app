import React from "react";
import {
  ContainerAbout,
  ContainerBarra,
  ContainerHeigth,
  ContainerMoves,
  ContainerWeight,
  ContainerWeightProps,
} from "./styles";

const DetailsAbout = () => {
  return (
    <ContainerAbout>
      <ContainerWeight>
        <ContainerWeightProps />
      </ContainerWeight>
      <ContainerBarra />
      <ContainerHeigth></ContainerHeigth>
      <ContainerBarra />
      <ContainerMoves></ContainerMoves>
    </ContainerAbout>
  );
};

export default DetailsAbout;
