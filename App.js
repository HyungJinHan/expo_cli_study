import { StatusBar } from "expo-status-bar";
import { Button, Text } from "react-native";
import styled from "styled-components/native";

const MainView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const MainText = styled.Text`
  font-weight: bold;
  color: #37b3ed;
  font-size: 18px;
`;

const MainInput = styled.TextInput`
  align-items: center;
  justify-content: center;
  border: 1px black solid;
  width: 80%;
  padding-left: 10px;
  margin: 15px;
  border-radius: 5px;
`;

const MainTouchableOpacity = styled.TouchableOpacity`
  background-color: #37b3ed;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
`;

const ButtonText = styled.Text`
  font-size: 20px;
  color: white;
`;

const MainButton = styled.Button`
  color: #37b3ed;
`;

export default function App() {
  return (
    <MainView>
      <StatusBar style="auto" />

      <MainText>Expo Test App</MainText>

      <MainInput />

      <MainTouchableOpacity onPress={() => alert("TouchableOpacity")}>
        <ButtonText>TouchableOpacity</ButtonText>
      </MainTouchableOpacity>

      {/* styled components로는 버튼 스타일링 불가 */}
      <MainButton title="Button" onPress={() => alert("Button")} />
    </MainView>
  );
}
