import styled from "styled-components/native";
import { IPokemonProps } from "../detailsHeader";
import { CardProps } from "../detailsTitle/style";

export const ContainerBaseStats = styled.View`
  height: 40%;
  width: 80%;
  flex-direction: row;
`;

export const ContainerProps = styled.View`
  width: 15%;
  height: 100%;
`;
export const ContainerPropsName = styled.Text<CardProps>`
  width: 100%;
  height: 16.66666666666667%;
  text-align: center;
  font-size: 16px;
  padding-top: 16%;
  font-weight: 800;
  color: ${(prop) => (prop.color ? prop.color : "red")}; ;
`;

export const ContainerValue = styled.View`
  width: 15%;
  height: 100%;
`;
export const ContainerRealValue = styled.Text`
  width: 100%;
  height: 16.66666666666667%;
  text-align: center;
  font-size: 16px;
  padding-top: 16%;
  font-weight: 600;
`;

export const ContainerProgress = styled.View`
  width: 69.5%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
export const ContainerProgress1 = styled.View<CardProps>`
  width: 100%;
  flex: 1;
  justify-content: center;
  color-scheme: ${(prop) => (prop.color ? prop.color : "red")};
`;

export const ContainerBarra = styled.View`
  background-color: grey;
  width: 0.5%;
  height: 100%;
`;
