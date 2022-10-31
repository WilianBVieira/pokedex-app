import { View, Text } from "react-native";
import React from "react";
import { Container, IconContainer, PageContainer } from "./styles";
import Ionicons from "@expo/vector-icons/AntDesign";

const Pagination = () => {
  return (
    <Container>
      <IconContainer>
        <Ionicons name="leftsquareo" size={30} color="black" />
      </IconContainer>
      <PageContainer></PageContainer>
      <IconContainer>
        <Ionicons name="rightsquareo" size={30} color="black" />
      </IconContainer>
    </Container>
  );
};

export default Pagination;
