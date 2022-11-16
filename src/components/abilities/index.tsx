import React from "react";
import DetailsAbout from "../detailsAbout";
import { IPokemonProps } from "../detailsHeader";
import DetailsStats from "../detailsStats";
import DetailsText from "../detailsText";
import DetailsTitle from "../detailsTitle";
import DetailsTitle2 from "../detailsTitle2";
import DetailsType from "../detailsType";
import { ContainerPai } from "./styles";
import TypePokemon from "../typePokemon";
import { View } from "react-native";

const Abilities = ({ data }: IPokemonProps) => {
  return (
    <ContainerPai>
      <View
        style={{
          width: "50%",
          height: "10%",
          padding: 8,
          justifyContent: "space-around",
          flexDirection: "row",
        }}
      >
        {data &&
          data.types.map((item, index) => <TypePokemon type={item.type} />)}
      </View>
      <DetailsTitle data={data} />
      <DetailsAbout data={data} />
      <DetailsText data={data} />
      <DetailsTitle2 data={data} />
      <DetailsStats data={data} />
    </ContainerPai>
  );
};

export default Abilities;
