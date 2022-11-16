import styled from "styled-components/native";
interface CardProps {
  color: string;
}

export const ContainerType = styled.View`
  height: 100%;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
`;

export const ContainerNameType1 = styled.View<CardProps>`
  width: 35%;
  height: 100%;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  background-color: ${(prop) => (prop.color ? prop.color : "white")};
`;

export const ContainerName1 = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: 600;
`;
