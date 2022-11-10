import styled from "styled-components/native";
import { CardProps } from "../detailsTitle/style";

export const ContainerTitle2 = styled.Text<CardProps>`
  color: ${(prop) => (prop.color ? prop.color : "red")};
  height: 5%;
  width: 80%;
  text-align: center;
  font-size: 20px;
  font-weight: 800;
`;
