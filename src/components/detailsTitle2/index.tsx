import React from "react";
import { IPokemonProps } from "../detailsHeader";
import { ContainerTitle2 } from "./styles";
import useTypes from "../hook/typesColor";

const DetailsTitle2 = ({ data }: IPokemonProps) => {
  return (
    <ContainerTitle2 color={useTypes(data && data.types[0].type.name)}>
      Base stats
    </ContainerTitle2>
  );
};

export default DetailsTitle2;
