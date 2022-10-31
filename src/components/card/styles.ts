import styled from "styled-components/native";

export const ContainerCardPai = styled.View`
  height: 180px;
  width: 33%;
  padding: 2px;
  margin-top: 5%;
  flex-direction: row;
`;

export const CardComponent = styled.TouchableOpacity<CardProps>`
  flex: 1;
  flex-direction: column;
  border: solid;
  border-radius: 8px;
  border-color: ${(prop) => (prop.color ? prop.color : "white")};
  height: 100%;
  width: 100%;
`;

export const CardTextContainer = styled.View`
  width: 100%;
  height: 10%;
  align-items: flex-end;
  justify-content: center;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`;

export const CardText = styled.Text`
  margin-right: 5%;
`;

export const ContainerImg = styled.View`
  width: 100%;
  height: 70%;
  align-items: center;
  justify-content: center;
`;

export const ImageCard = styled.Image`
  width: 100%;
  height: 100%;
`;
interface CardProps {
  color: string;
}
export const ContainerImageCard = styled.View<CardProps>`
  height: 20%;
  width: 100%;
  background-color: ${(prop) => (prop.color ? prop.color : "white")};
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const CardTextEnd = styled.Text`
  font-size: 22px;
  font-weight: 400;
  font-family: Georgia;
`;
