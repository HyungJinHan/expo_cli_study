import { StatusBar } from "expo-status-bar";
import { Button, Text } from "react-native";
import styled from "styled-components/native";
import { BasicButton, CustomButton } from "../components/Button";
import CustomInput from "../components/Input";
import CustomText from "../components/Text";

const MainView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default function MainPage({ navigation }) {
  return (
    <MainView>
      <StatusBar style="auto" />
      <CustomText />

      <CustomInput />

      <CustomButton title="Test1" navigation={navigation} />
      <BasicButton title="Test2" navigation={navigation} />
    </MainView>
  );
}
