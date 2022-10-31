import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Details from "../screens/Details";
import Home from "../screens/Home";
import { NativeBaseProvider } from "native-base";

const { Navigator, Screen } = createNativeStackNavigator();

function MyStack() {
  return (
    <NativeBaseProvider>
      <Navigator>
        <Screen name="Home" component={Home} />
        <Screen name="Details" component={Details} />
      </Navigator>
    </NativeBaseProvider>
  );
}

export default MyStack;
