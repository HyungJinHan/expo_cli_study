import { StyleSheet, Text, View } from "react-native";
import React from "react";
import styled from "styled-components/native";

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

export function BasicButton({ title, navigation }) {
  return (
    <>
      {/* styled components로는 버튼 스타일링 불가 */}
      <MainButton
        title={title}
        onPress={() => navigation.navigate(`${title}`)}
      />
    </>
  );
}

export function CustomButton({ title, navigation }) {
  return (
    <>
      <MainTouchableOpacity onPress={() => navigation.navigate(`${title}`)}>
        <ButtonText>{title}</ButtonText>
      </MainTouchableOpacity>
    </>
  );
}
