import React, { useEffect, useState } from "react";
import { ContainerPai } from "./styles";
import Header from "../../components/header";
import SearchBar from "../../components/searchBar";
import Card from "../../components/card";
import List, { IList } from "../../components/list";
import Pagination from "../../components/pagination";
import { convertAbsoluteToRem } from "native-base/lib/typescript/theme/tools";
const Icon = require("../../assets/Pokeball.png");
const Icon2 = require("../../assets/Vector.png");
const Icon3 = require("../../assets/Lupa.png");
const ImgCard = require("../../assets/Bulbasaur.png");
interface IReq {
  results: [IList];
}
const Home = () => {
  const [data, setData] = useState<IList[]>();
  const [page, setPage] = useState(1);
  function handlePage(click: number) {
    setPage(page + click);
  }
  function handleFilter(valor: string) {
    setFilter(valor);
  }

  useEffect(() => {
    fetch(
      `https://pokeapi.co/api/v2/pokemon/?offset=${(page - 1) * 21}&limit=21`
    )
      .then((res) => res.json())
      .then((data: IReq) => setData(data.results));
  }, [page]);
  const [filtro, setFilter] = useState<string>("");
  return (
    <ContainerPai>
      <Header />
      <SearchBar func={(valor: string) => handleFilter(valor)} />
      <Pagination
        pages={page}
        handleClick={(click: number) => handlePage(click)}
      />
      <List
        data={
          data && filtro != ""
            ? data.filter((item) => item.name.match(filtro.toLowerCase()))
            : data && data
        }
      />
    </ContainerPai>
  );
};

export default Home;
