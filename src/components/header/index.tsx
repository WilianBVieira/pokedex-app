import { Image } from "react-native";
import {
  ContainerImage1,
  ContainerLogo1,
  ContainerNomeApp,
  ContainerTextName,
  ImageIcon,
  TextComponent,
  TextHash,
} from "./styles";
const Icon = require("../../assets/Pokeball.png");
const Icon2 = require("../../assets/Vector.png");

const Header = () => {
  return (
    <ContainerNomeApp>
      <ContainerLogo1>
        <ImageIcon source={Icon} />
      </ContainerLogo1>
      <ContainerTextName>
        <TextComponent>Pokédex</TextComponent>
      </ContainerTextName>
      <ContainerImage1>
        <TextHash>#</TextHash>
        <Image source={Icon2} style={{ width: 9.14, height: 16 }} />
      </ContainerImage1>
    </ContainerNomeApp>
  );
};

export default Header;
