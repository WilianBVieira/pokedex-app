import { View, Text } from "react-native";
import React from "react";
import { Container, IconContainer, PageContainer } from "./styles";
import Ionicons from "@expo/vector-icons/AntDesign";
interface PaginationProps {
  pages: number;
  handleClick: (click: number) => void;
}

const Pagination = ({ pages, handleClick }: PaginationProps) => {
  return (
    <Container>
      <IconContainer
        onPress={(e: any) => {
          if (pages > 1) handleClick(-1);
        }}
      >
        <Ionicons name="leftsquareo" size={30} color="black" />
      </IconContainer>
      <PageContainer>
        <Text style={{ fontSize: 26 }}>{pages}</Text>
      </PageContainer>
      <IconContainer onPress={(e: any) => handleClick(1)}>
        <Ionicons name="rightsquareo" size={30} color="black" />
      </IconContainer>
    </Container>
  );
};

export default Pagination;
