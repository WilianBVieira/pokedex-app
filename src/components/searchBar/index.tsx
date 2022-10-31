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
        InputLeftElement={<Ionicons name="search1" size={15} color="black" />}
        placeholder="Name"
        style={{
          textAlign: "center",
          borderRadius: 20,
          width: "95%",
          alignSelf: "center",
        }}
      />
    </Container>
  );
};

export default SearchBar;
