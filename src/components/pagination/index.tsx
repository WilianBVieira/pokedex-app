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
      <IconContainer>
        <Ionicons
          name="leftsquareo"
          size={30}
          color="black"
          onPress={(e: any) => {
            if (pages > 1) handleClick(-1);
          }}
        />
      </IconContainer>
      <PageContainer>
        <Text style={{ fontSize: 30, textAlign: "center" }}>{pages}</Text>
      </PageContainer>
      <IconContainer>
        <Ionicons
          name="rightsquareo"
          size={30}
          color="black"
          onPress={(e: any) => handleClick(1)}
        />
      </IconContainer>
    </Container>
  );
};

export default Pagination;
