import React from "react";
import Ionicons from "@expo/vector-icons/AntDesign";
import {
  ContainerIcon,
  ContainerId,
  ContainerName,
  ContainerPai,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { IPokemon } from "../card";
export interface IPokemonProps {
  data: IPokemon | undefined;
}

const DetailsHeader = ({ data }: IPokemonProps) => {
  const navigation = useNavigation();
  function handleBack() {
    navigation.goBack();
  }
  return (
    <ContainerPai>
      <ContainerIcon>
        <Ionicons
          name="arrowleft"
          size={30}
          color="white"
          onPress={() => handleBack()}
        />
      </ContainerIcon>
      <ContainerName>{data && data.name}</ContainerName>
      <ContainerId>#{data && data.id}</ContainerId>
    </ContainerPai>
  );
};

export default DetailsHeader;
