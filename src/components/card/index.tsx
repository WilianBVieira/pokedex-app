import React, { useEffect, useState } from "react";
import useTypes from "../hook/typesColor";
import { IList } from "../list";
import {
  CardComponent,
  CardText,
  CardTextContainer,
  CardTextEnd,
  ContainerCardPai,
  ContainerImageCard,
  ContainerImg,
  ImageCard,
} from "./styles";
const ImgCard = require("../../assets/Bulbasaur.png");
interface ICardProps {
  data: IList | undefined;
}
interface IPokemon {
  abilities: [];
  base_experience: number;
  forms: [];
  game_indices: [];
  height: number;
  held_items: [];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: [];
  name: string;
  order: number;
  past_types: [];
  species: {};
  sprites: { front_default: string };
  stats: [];
  types: [{ type: { name: string } }];
  weight: number;
}
const Card = ({ data }: ICardProps) => {
  // desestruturação
  const [pokemonInfo, setPokemonInfo] = useState<IPokemon>();
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${data && data.name}`)
      .then((res) => res.json())
      .then((data) => setPokemonInfo(data));
  }, [data, pokemonInfo]);
  useEffect(() => {}, [pokemonInfo]);
  return (
    <ContainerCardPai>
      <CardComponent
        activeOpacity={0.7}
        onPress={alert}
        color={useTypes(pokemonInfo && pokemonInfo.types[0].type.name)}
      >
        <CardTextContainer>
          <CardText>{pokemonInfo && pokemonInfo.id}</CardText>
        </CardTextContainer>
        <ContainerImg>
          <ImageCard
            source={{ uri: pokemonInfo && pokemonInfo.sprites.front_default }}
          />
        </ContainerImg>
        <ContainerImageCard
          color={useTypes(pokemonInfo && pokemonInfo.types[0].type.name)}
        >
          <CardTextEnd>{data && data.name}</CardTextEnd>
        </ContainerImageCard>
      </CardComponent>
    </ContainerCardPai>
  );
};

export default Card;
