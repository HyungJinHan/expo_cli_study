import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainPage from "./pages/MainPage";
import TestPage1 from "./pages/TestPage1";
import TestPage2 from "./pages/TestPage2";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={MainPage} />
        <Stack.Screen name="Test1" component={TestPage1} />
        <Stack.Screen name="Test2" component={TestPage2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
