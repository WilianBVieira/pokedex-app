import { SafeAreaView, FlatList } from "react-native";
import Card from "../card";

export interface IList {
  url: string;
  name: string;
}
interface IListProps {
  data: [IList] | undefined;
}

const List = ({ data }: IListProps) => {
  //   return (
  //     <SafeAreaView>
  //       <ScrollView>
  //         {data && data.map((item, index) => <Card data={item} key={index} />)}
  //       </ScrollView>
  //     </SafeAreaView>
  //   );
  return (
    <FlatList
      style={{
        flexDirection: "column",
        paddingTop: 5,
      }}
      columnWrapperStyle={{
        flex: 1,
        justifyContent: "center",

        padding: 5,
      }}
      showsVerticalScrollIndicator={false}
      numColumns={3}
      data={data}
      renderItem={({ item, index }) => <Card data={item} key={index} />}
      keyExtractor={(item: any) => item.id}
    />
  );
};

export default List;
