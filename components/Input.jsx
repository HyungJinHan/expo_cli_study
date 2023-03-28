import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import styled from "styled-components/native";

const MainInput = styled.TextInput`
  align-items: center;
  justify-content: center;
  border: 1px black solid;
  width: 80%;
  padding-left: 10px;
  margin: 15px;
  border-radius: 5px;
`;

export default function CustomInput() {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <MainInput
        value={inputValue}
        placeholder="테스트용 입력"
        onChangeText={(e) => {
          setInputValue(e);
          console.log(inputValue);
        }}
      />
    </>
  );
}
