import styled from "styled-components/native";
interface CardProps {
  color: string;
}

export const ContainerTitle = styled.Text<CardProps>`
  color: ${(prop) => (prop.color ? prop.color : "red")};
  height: 5%;
  width: 80%;
  font-size: 20px;
  font-weight: 800;
  text-align: center;
`;
