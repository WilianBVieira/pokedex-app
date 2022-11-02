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
          name="left"
          size={30}
          color="#6E6E6E"
          onPress={(e: any) => {
            if (pages > 1) handleClick(-1);
          }}
        />
      </IconContainer>
      <PageContainer>
        <Text style={{ fontSize: 25, textAlign: "center", color: "#6E6E6E" }}>
          {pages}
        </Text>
      </PageContainer>
      <IconContainer>
        <Ionicons
          name="right"
          size={30}
          color="#6E6E6E"
          onPress={(e: any) => handleClick(1)}
        />
      </IconContainer>
    </Container>
  );
};

export default Pagination;
