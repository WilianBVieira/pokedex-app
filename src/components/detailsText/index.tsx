import React, { useEffect, useState } from "react";
import { IPokemonProps } from "../detailsHeader";
import { ContainerText } from "./style";
export interface IPokemon2 {
  flavor_text_entries: [{ flavor_text: string }];
}

const DetailsText = ({ data }: IPokemonProps) => {
  const [pokemonInfoText, setPokemonInfoText] = useState<IPokemon2>();
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${data && data.id}`)
      .then((res) => res.json())
      .then((data) => setPokemonInfoText(data));
  }, [data]);
  return (
    <ContainerText>
      {pokemonInfoText && pokemonInfoText.flavor_text_entries[0].flavor_text}
    </ContainerText>
  );
};

export default DetailsText;
