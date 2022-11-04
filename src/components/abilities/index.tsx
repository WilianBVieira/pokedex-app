import React from "react";
import DetailsAbout from "../detailsAbout";
import DetailsStats from "../detailsStats";
import DetailsText from "../detailsText";
import DetailsTitle from "../detailsTitle";
import DetailsTitle2 from "../detailsTitle2";
import DetailsType from "../detailsType";
import { ContainerPai } from "./styles";

const Abilities = () => {
  return (
    <ContainerPai>
      <DetailsType />
      <DetailsTitle />
      <DetailsAbout />
      <DetailsText />
      <DetailsTitle2 />
      <DetailsStats />
    </ContainerPai>
  );
};

export default Abilities;
