import { Icon, Input } from "native-base";
import React, { useState } from "react";
import { Container } from "./styles";
import Ionicons from "@expo/vector-icons/AntDesign";

interface SearchProps {
  func: (e: string) => void;
}
const SearchBar = ({ func }: SearchProps) => {
  return (
    <Container>
      <Input
        onChangeText={(e: string) => func(e)}
        InputLeftElement={<Ionicons name="search1" size={15} color="#979797" />}
        placeholder="Procurar"
        style={{
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
