import React from "react";
import { IPokemonProps } from "../detailsHeader";
import { ContainerImage, ContainerPai } from "./styles";

const DetailsImage = ({ data }: IPokemonProps) => {
  return (
    <ContainerPai>
      <ContainerImage source={{ uri: data && data.sprites.front_default }} />
    </ContainerPai>
  );
};

export default DetailsImage;
