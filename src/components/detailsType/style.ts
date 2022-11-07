import styled from "styled-components/native";
interface CardProps {
  color: string;
}

export const ContainerType = styled.View`
  height: 5%;
  width: 60%;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
`;

export const ContainerNameType1 = styled.View<CardProps>`
  width: 25%;
  height: 100%;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  background-color: ${(prop) => (prop.color ? prop.color : "white")};
`;

export const ContainerNameType2 = styled.View`
  background-color: blue;
  width: 25%;
  height: 100%;
  border-radius: 20px;
`;

export const ContainerName1 = styled.Text`
  color: red;
  font-size: 20px;
  font-weight: 600;
  color: white;
`;

export const ContainerName2 = styled.Text``;
