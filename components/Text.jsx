import { StyleSheet, Text } from "react-native";
import React from "react";
// import styled from "styled-components/native";

// const MainText = styled.Text`
//   font-weight: bold;
//   color: #37b3ed;
//   font-size: 18px;
// `;

export default function CustomText({ inputValue }) {
  return (
    <>
      {inputValue === "" ? (
        <Text style={textStyles.mainText}>텍스트 입력 시 값 변동</Text>
      ) : (
        <Text style={textStyles.mainText}>{inputValue}</Text>
      )}
    </>
  );
}

const textStyles = StyleSheet.create({
  mainText: {
    fontWeight: "bold",
    color: "#37b3ed",
    fontSize: 25,
  },
});
