import React from "react";
import {
  ContainerAbout,
  ContainerBaseStats,
  ContainerPai,
  ContainerText,
  ContainerTitle,
  ContainerTitle2,
  ContainerType,
} from "./styles";

const Abilities = () => {
  return (
    <ContainerPai>
      <ContainerType />
      <ContainerTitle />
      <ContainerAbout />
      <ContainerText />
      <ContainerTitle2 />
      <ContainerBaseStats />
    </ContainerPai>
  );
};

export default Abilities;
