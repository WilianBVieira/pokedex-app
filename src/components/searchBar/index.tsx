import { Icon, Input } from "native-base";
import React from "react";
import { Container } from "./styles";
import Ionicons from "@expo/vector-icons/AntDesign";

const SearchBar = () => {
  const IconLupa = require("../../assets/Lupa.png");
  return (
    <Container>
      <Input
        // w={{
        //   base: "90%",
        //   md: "25%",
        // }}
        InputLeftElement={<Ionicons name="search1" size={15} color="#979797" />}
        placeholder="Procurar"
        style={{
          // textAlign: "center",
          borderRadius: 20,
          width: "100%",
          alignSelf: "center",
          paddingLeft: "40.5%",
        }}
      />
    </Container>
  );
};

export default SearchBar;
