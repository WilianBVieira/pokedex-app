import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import { DetailsParam } from "../../routes/@types/navigation";
import { ContainerPai } from "./styles";
import DetailsHeader from "../../components/detailsHeader";
import DetailsImage from "../../components/detailsImage";
import Abilities from "../../components/abilities";
import useTypes from "../../components/hook/typesColor";

const Details = () => {
  const route = useRoute();
  const { data } = route.params as DetailsParam;
  return (
    <ContainerPai color={useTypes(data && data.types[0].type.name)}>
      <DetailsHeader data={data} />
      <DetailsImage data={data} />
      <Abilities data={data} />
    </ContainerPai>
  );
};

export default Details;
