import React, { useEffect, useState } from "react";
import { ContainerPai } from "./styles";
import Header from "../../components/header";
import SearchBar from "../../components/searchBar";
import Card from "../../components/card";
import List, { IList } from "../../components/list";
import Pagination from "../../components/pagination";
const Icon = require("../../assets/Pokeball.png");
const Icon2 = require("../../assets/Vector.png");
const Icon3 = require("../../assets/Lupa.png");
const ImgCard = require("../../assets/Bulbasaur.png");
interface IReq {
  count: number;
  next: string;
  previous: string;
  results: [IList];
}
const Home = () => {
  const [data, setData] = useState<IReq>();

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=50")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <ContainerPai>
      <Header />
      <SearchBar />
      <List data={data && data.results} />
      <Pagination />
    </ContainerPai>
  );
};

export default Home;
