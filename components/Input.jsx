import { StyleSheet, TextInput } from "react-native";
import React from "react";
// import styled from "styled-components/native";

// const MainInput = styled.TextInput`
//   align-items: center;
//   justify-content: center;
//   border: 1px black solid;
//   width: 80%;
//   padding-left: 10px;
//   margin: 15px;
//   border-radius: 5px;
// `;

export default function CustomInput({ inputValue, setInputValue }) {
  return (
    <TextInput
      value={inputValue}
      style={inputStyles.mainInput}
      placeholder="테스트용 입력"
      onChangeText={(e) => {
        setInputValue(e);
        console.log(inputValue);
      }}
    />
  );
}

const inputStyles = StyleSheet.create({
  mainInput: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 2,
    width: "80%",
    paddingLeft: 10,
    borderRadius: 5,
    margin: 15,
  },
});
