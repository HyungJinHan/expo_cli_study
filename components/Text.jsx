import { StyleSheet, Text, View } from "react-native";
import React from "react";
import styled from "styled-components/native";

const MainText = styled.Text`
  font-weight: bold;
  color: #37b3ed;
  font-size: 18px;
`;

export default function CustomText() {
  return (
    <>
      <MainText>Hello, World</MainText>
    </>
  );
}
