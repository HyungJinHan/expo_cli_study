import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "./layout/header/Header";
import MainPage from "./pages/MainPage";
import TestPage1 from "./pages/TestPage1";
import TestPage2 from "./pages/TestPage2";
import SelfPage from "./pages/SelfPage";
import { StatusBar } from "react-native";

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar hidden={false} />
      <Header />

      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={MainPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Self"
            component={SelfPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Test1" component={TestPage1} />
          <Stack.Screen name="Test2" component={TestPage2} />
        </Stack.Navigator>
      </NavigationContainer>

      {/* <Footer /> */}
    </>
  );
};

export default App;
