import { View, Text } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { DetailsParam } from "../../routes/@types/navigation";
import { ContainerPai } from "./styles";
import DetailsHeader from "../../components/detailsHeader";
import DetailsImage from "../../components/detailsImage";
import Abilities from "../../components/abilities";

const Details = () => {
  const route = useRoute();
  const { data } = route.params as DetailsParam;

  return (
    <ContainerPai>
      <DetailsHeader data={data} />
      <DetailsImage data={data} />
      <Abilities />
    </ContainerPai>
  );
};

export default Details;
