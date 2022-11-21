import { useEffect } from "react";
import { SafeAreaView, FlatList } from "react-native";
import Card from "../card";

export interface IList {
  url: string;
  name: string;
}
interface IListProps {
  data: IList[] | undefined;
}

const List = ({ data }: IListProps) => {
  useEffect(() => {}, [data]);
  return (
    <FlatList
      style={{
        flexDirection: "column",
      }}
      columnWrapperStyle={{
        flex: 1,
        justifyContent: "center",
      }}
      showsVerticalScrollIndicator={false}
      numColumns={3}
      data={data}
      renderItem={({ item, index }) => <Card data={item} key={index} />}
      keyExtractor={(item: any, index: number) => index.toString()}
    />
  );
};

export default List;
