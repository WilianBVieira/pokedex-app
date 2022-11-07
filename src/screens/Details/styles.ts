import styled from "styled-components/native";
interface CardProps {
  color: string;
}

export const ContainerPai = styled.View<CardProps>`
  align-items: center;
  background-color: ${(prop) => (prop.color ? prop.color : "white")};
`;
