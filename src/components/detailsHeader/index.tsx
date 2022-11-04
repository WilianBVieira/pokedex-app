import React from "react";
import {
  ContainerIcon,
  ContainerId,
  ContainerName,
  ContainerPai,
} from "./styles";

const DetailsHeader = () => {
  return (
    <ContainerPai>
      <ContainerIcon />
      <ContainerName />

      <ContainerId />
    </ContainerPai>
  );
};

export default DetailsHeader;
